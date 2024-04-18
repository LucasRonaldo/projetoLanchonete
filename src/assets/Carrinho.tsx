import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useNavigationContainerRef } from '@react-navigation/native';

function Carrinho(): JSX.Element {
    const navigation = useNavigationContainerRef();
    

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Carrinho(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/usuario.png')}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite uma senha..."
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText} onPress={() => navigation.navigate('cadastroPage')}>
                        Não possui uma conta?: Cadastre
                    </Text>
                </TouchableOpacity>
               
            </Animatable.View>
            <Animatable.View animation="fadeInUp" delay={600} style={styles.footer}>
                <TouchableOpacity><Image source={require('../assets/images/home.png')} style={styles.footerIcon} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('../assets/images/pedidos.png')} style={styles.footerIcon} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('../assets/images/menu.png')} style={styles.footerIcon} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('../assets/images/perfil.png')} style={styles.footerIcon} /></TouchableOpacity>
            </Animatable.View>  
        </View>
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
        marginTop:50
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'black', // Cor da borda
        backgroundColor: '#f5f5f5', // Cor de fundo
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        paddingHorizontal: 10, // Adiciona um preenchimento horizontal,
        borderBottomLeftRadius:20,
        borderTopRightRadius:20
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:-40
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor:'grey'
    },
    footerIcon: {
        width: 30,
        height: 30,
    },
});

export default Carrinho;
