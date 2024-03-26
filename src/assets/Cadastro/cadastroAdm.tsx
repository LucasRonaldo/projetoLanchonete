import React, { useState } from 'react';
import { Animated, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

function CadastroAdm(): JSX.Element {








    return (


        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft"
                delay={500} style={styles.containerHeader} >

                <Text style={styles.message}>Cadastrar Administrador(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp"
                style={styles.containerForm} >
                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}></TextInput>

                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Ex: fulano@gmail.com"
                    style={styles.input}></TextInput>

                <Text style={styles.title}>CPF</Text>
                <TextInput
                    placeholder="Ex:12345678911"
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

    },
    title: {
        fontSize: 20,
        marginTop: 28,
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


    }

}









);





export default CadastroAdm;