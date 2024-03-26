import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CadastroPage(): JSX.Element {
    const navigation = useNavigation();

    const handleCadastroTipo1 = () => {
        // Navegar para a página de cadastro do tipo 1
        navigation.navigate('cadastroAdm');
    };

    const handleCadastroTipo2 = () => {
        // Navegar para a página de cadastro do tipo 2
        navigation.navigate('CadastroTipo2');
    };

    const handleCadastroTipo3 = () => {
        // Navegar para a página de cadastro do tipo 3
        navigation.navigate('CadastroTipo3');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleCadastroTipo1}>
                <Text style={styles.buttonText}>Cadastro Admnistrador</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCadastroTipo2}>
                <Text style={styles.buttonText}>Cadastro Tipo 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCadastroTipo3}>
                <Text style={styles.buttonText}>Cadastro Tipo 3</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#38a69d',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CadastroPage;
