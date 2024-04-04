import React from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';

interface Item {
    id: string;
    nome: string;
    preco: string;
    listaDeIgredientes: string;
    imagemIlustrativa: any;
}

const dados: Item[] = [
    { id: '1', nome: 'Strogonoff', preco: 'R$ 25,00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/strogonoff.png') },
    { id: '2', nome: 'Hamburguer', preco: 'R$ 30,00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/hamburguer.png' )},
    // Adicione os outros itens aqui
];

const renderItem = ({ item }: { item: Item }) => (
    <Animatable.View animation="fadeInLeft" delay={400} style={styles.card}>
        <Text style={styles.nome}>{item.nome}</Text>

        <View style={styles.row}>
            <Image source={item.imagemIlustrativa} style={styles.imagemIlustrativa} />
            <ScrollView>
                <Text style={styles.listaDeIgrediente}>{item.listaDeIgredientes}</Text>
            </ScrollView>
        </View>
        
        <TouchableOpacity style={styles.precoContainer}>
            <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.preco}><Text style={styles.textPreco}>{item.preco}</Text></Animatable.View>
        </TouchableOpacity>
    </Animatable.View>
);

function HomeLanchonete(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#bdbdbd' barStyle='dark-content' />
            <Animatable.View animation="fadeInDown" delay={600} style={styles.header}>
                <Animatable.Image  animation="pulse" easing="ease-out" iterationCount="infinite"
                    source={require('./assets/images/logo.png')}
                    style={styles.logo}
                />
            </Animatable.View>

            <View><Text style={styles.tituloCategoria}>Categorias</Text></View>

            <ScrollView style={styles.categorias} showsHorizontalScrollIndicator horizontal>
                <View style={styles.itensCategoria}>
                    <Image source={require('../src/assets/images/drink.png')} style={styles.categoriaIcon} />
                    <Text style={styles.textItemCategoria}>Bebida</Text>
                </View>
            </ScrollView>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <Animatable.View animation="fadeInUp" delay={600} style={styles.footer}>
                <TouchableOpacity><Image source={require('./assets/images/home.png')} style={styles.footerIcon} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('./assets/images/pedidos.png')} style={styles.footerIcon} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('./assets/images/menu.png')} style={styles.footerIcon} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('./assets/images/perfil.png')} style={styles.footerIcon} /></TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dadada'
    },
    row: {
        flexDirection: 'row',
        padding: 10,
    },
    card: {
        backgroundColor: '#f1f1f1',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    nome: {
        fontSize: 24,
        fontFamily: 'sans-serif',
        color: '#333',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 10,
        marginBottom: 10,
    },
    listaDeIgrediente: {
        color: '#666',
        fontSize: 16,
    },
    header: {
        backgroundColor: '#bdbdbd',
        alignItems: 'center',
        paddingVertical: 10,
        height: 60,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 40,
        justifyContent: 'center',
    },
    logo: {
        width: 50,
        height: 50,
    },
    imagemIlustrativa: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    precoContainer: {
        alignItems: 'center',
        borderBottomRightRadius: 20,
    },
    preco: {
        backgroundColor: '#ff6347',
        width: 150,
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
    },
    textPreco: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    tituloCategoria: {
        fontSize: 30,
        marginLeft: 10,
        marginTop: 10,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: '#333',
    },
    categorias: {
        backgroundColor: '#f3f3f3',
        padding: 10,
        marginHorizontal: 16,
        borderRadius: 10,
        height: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    itensCategoria: {
        backgroundColor: '#fff',
        height: 60,
        width: 130,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    categoriaIcon: {
        width: 35,
        height: 35,
    },
    textItemCategoria: {
        fontSize: 20,
        color: '#333',
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#bdbdbd',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopRightRadius: 15,
    },
    footerIcon: {
        width: 30,
        height: 30,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo escura semi-transparente
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
    },
    fullScreenImage: {
        width: '100%',
        height: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1, // Para que o botão de fechar fique em cima da imagem
    },
});

export default HomeLanchonete;
