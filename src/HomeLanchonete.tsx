import React from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Item {
    id: string;
    nome: string;
    preco: string;
    listaDeIgredientes: string;
    imagemIlustrativa: any;

}

const dados: Item[] = [
    { id: '1', nome: 'Strogonoff', preco: '77', listaDeIgredientes: 'Frango ao mo', imagemIlustrativa: require('../src/assets/images/strogonoff.jpg') }
    ,
    /*  { id: '2', nome: 'Hamburguer', preco: '13', listaDeIgredientes: 'strbstojnslijbsijsçjsnpjnasçojnsçohsotighsotihgsoithoishotihsosgstbs' },
  
    /*  { id: '3', nome: 'Pizza', preco: '56', listaDeIgredientes: 'santos@teste.com' },
      { id: '4', nome: 'Bisteca', preco: '77', listaDeIgredientes: 'aparecida@teste.com' }
      ,
      { id: '5', nome: 'Sushi', preco: '13', listaDeIgredientes: 'silva@teste.com' },
  
      { id: '6', nome: 'Frango', preco: '56', listaDeIgredientes: 'santos@teste.com' },
      { id: '7', nome: 'Rabanada', preco: '77', listaDeIgredientes: 'aparecida@teste.com' }
      ,
      { id: '8', nome: '', preco: '13', listaDeIgredientes: 'silva@teste.com' },
  
      { id: '9', nome: 'santos', preco: '56', listaDeIgredientes: 'santos@teste.com' },
      { id: '10', nome: 'Aparecida', preco: '77', listaDeIgredientes: 'aparecida@teste.com' }
      ,
      { id: '11', nome: 'silva', preco: '13', listaDeIgredientes: 'silva@teste.com' },
      { id: '12', nome: 'silva', preco: '13', listaDeIgredientes: 'silva@teste.com' },
      { id: '13', nome: 'silva', preco: '13', listaDeIgredientes: 'silva@teste.com' },
      { id: '14', nome: 'silva', preco: '13', listaDeIgredientes: 'silva@teste.com' },
      { id: '15', nome: 'silva', preco: '13', listaDeIgredientes: 'silva@teste.com' },*/


];


const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={[ styles.textNome]}>{item.nome}</Text>

        <View style={styles.column}>

            <Image  source={item.imagemIlustrativa} style={styles.imagemIlustrativa} />
            
            <Text style={styles.listaDeIgrediente}>{item.listaDeIgredientes}</Text>
            <Text style={styles.listaDeIgrediente}>{item.preco}</Text>

        </View>
    </TouchableOpacity >

)
function HomeLanchonete(): React.JSX.Element {

    return (

        <View style={styles.container}>

            <StatusBar backgroundColor='#00edff' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Beach Lanches</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}

            />


            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/home.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/pedidos.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/menu.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/perfil.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
            </View>

        </View>



    );






}

const styles = StyleSheet.create({
    container: {

        flex: 1
    },
    column: {
        flexDirection: 'row',
        padding: 10,
    },
    item: {

        backgroundColor: 'orange',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        margin:1
    },
    listaDeIgrediente: {
        color: 'black',
        padding: 2,
        fontSize: 15,
        fontFamily: 'sans-serif'
    },
    textNome: {
        fontSize: 30,
        alignItems: 'center',
        padding: 5,
        fontFamily: 'sans-serif',
        color:'brown'
    },
    header: {
        backgroundColor: '#00edff',
        alignItems: 'center',
        paddingVertical: 10,
        height:100
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#00edff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    footerIcon: {
        width: 30,
        height: 30
    },

    imagemIlustrativa: {
        width: 150,
        height: 150,
        position: 'relative',
        borderRadius: 10
    }


})

export default HomeLanchonete;