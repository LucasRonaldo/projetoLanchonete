import React, { useState } from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

function CadastroCliente(): JSX.Element {

    const [clientes, setClientes] = useState<Cliente[]>([]);

    const [imagem, setImagem] = useState<any>('');
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const selecionarImagem = () => {

        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('cancelado pelo usuário');

            } else if (response.error) {
                console.log('erro ao abrir a galeria');

            }
            else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
            }
        })


    }





    return (


        <ScrollView style={styles.container}>
            <Animatable.View animation="fadeInLeft"
                delay={500} style={styles.containerHeader} >

                <Text style={styles.message}>Cadastrar Cliente</Text>
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
                        source={require('../../assets/images/usuario.png')}
                        style={styles.logo}
                    />}

                </View>
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem} >
                    <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Digite seu nome"
                    style={styles.input}></TextInput>

                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Ex: user@gmail.com"
                    style={styles.input}></TextInput>

                <Text style={styles.title}>Telefone</Text>
                <TextInput
                    placeholder="Digite seu numero"
                    style={styles.input}></TextInput>
                    <Text style={styles.title}>Endereço</Text>
                <TextInput
                    placeholder="Digite seu Endereço"
                    style={styles.input}></TextInput>
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite uma senha"
                    style={styles.input}></TextInput>





                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>







            </Animatable.View>

            
        </ScrollView>

    );
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





export default CadastroCliente;