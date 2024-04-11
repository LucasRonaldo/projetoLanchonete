import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native-animatable";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";
import * as Animatable from 'react-native-animatable'

const CadastroProduto: React.FC = () => {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [ingredientes, setIngredientes] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const cadastrarProduto = async () => {
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('preco', preco);
        formData.append('ingredientes', ingredientes);
        formData.append('imagem', {
            uri: imagem,
            type: 'imagem/jpeg',
            name:new Date() + '.jpg'
        });

        const response = await axios.post('http://10.137.11.209:8000/api/produtos', formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
    } catch(error){
        console.log(error);
    }
    }

    const abrirCamera = () => {
        const options = {
            mediaType:'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            }
            else if(response.error){
                console.log('erro ao abrir a camera');
            }
            else{
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);
            }
        });
    }

    const selecionarImagem =() => {

        const options = {
            mediaType:'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchImageLibrary(options, (response)=> {
            if(response.didCancel){
                console.log('cancelado pelo usuário');

            } else if(response.error){
                console.log('erro ao abrir a galeria');

            }
            else{
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
            }
        })


    }

    return (
        <ScrollView style={styles.container}>
            <Animatable.View animation="fadeInLeft"
                delay={500} style={styles.containerHeader} >

                <Text style={styles.message}>Cadastrar Produto</Text>
            </Animatable.View>


            <Animatable.View  animation="fadeInUp"


                style={styles.containerForm} >
                <Text style={styles.titleSelecionarFoto}>Foto</Text>

                <View style={styles.logoContainer}>
                    {/*<Image
                        source={require('../../assets/images/usuario.png')}
                        style={styles.logo}
    />*/}

                    {imagem ? <Image source={{ uri: imagem }} style={styles.logo} /> : <Image
                        source={require('./../assets/images/usuario.png')}
                        style={styles.logo}
                    />}

                </View>
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem} >
                    <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Digite seu nome"
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}></TextInput>

                <Text style={styles.title}>Preço</Text>
                <TextInput
                    placeholder="Digite o preço"
                    style={styles.input}
                    value={preco}
                    onChangeText={setPreco}></TextInput>
                      <Text style={styles.title}>Ingredientes</Text>
                <TextInput
                    placeholder="Digite seu Ingredientes"
                    style={styles.input}
                    value={ingredientes}
                    onChangeText={setIngredientes}
                    multiline></TextInput>

               




                <TouchableOpacity style={styles.button} onPress={cadastrarProduto}>
                    <Text style={styles.buttonText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>







            </Animatable.View>

            
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',

    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    titleSelecionarFoto: {
        fontSize: 25,
        marginTop: 28,
        textAlign:'center',
        marginBottom:10
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30

    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',

    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    }, registerText: {

        color: '#a1a1a1'


    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 40,

    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -30,
    },
    logo: {
        width: 150,
        height: 150,
         borderRadius:50,

    },

}









);

export default CadastroProduto;