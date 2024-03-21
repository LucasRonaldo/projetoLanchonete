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
    { id: '1', nome: 'Strogonoff', preco: 'R$ '+'25'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/strogonoff.png') }
    ,
      { id: '2', nome: 'Hamburguer', preco: 'R$ '+'30'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/hamburguer.png' )}
  
      ,{ id: '3', nome: 'Pizza', preco: 'R$ '+'30'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/pizza.png' )}
      ,{ id: '4', nome: 'Rabanada', preco: 'R$ '+'30'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/rabanada.png' )}
      ,{ id: '5', nome: 'Sushi', preco: 'R$ '+'30'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/sushi.png' )}
      ,{ id: '6', nome: 'Bife', preco: 'R$ '+'30'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/bife.png' )}
      ,{ id: '7', nome: 'Peixe Frito', preco: 'R$ '+'30'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/peixe.png' )}
      ,{ id: '8', nome: 'Batata Frita', preco: 'R$ '+'23'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/batata.png' )}
      ,{ id: '9', nome: 'X-tudo', preco: 'R$ '+'20'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/x-tudo.png' )}
      ,{ id: '10', nome: 'Macarronada', preco: 'R$ '+'60'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/macarronada.png' )}
      ,{ id: '11', nome: 'Bolin de Bacalhau', preco: 'R$ '+'40'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/bolinho.png' )}
      ,{ id: '12', nome: 'pastel', preco: 'R$ '+'20'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/pastel.png' )}
      ,{ id: '13', nome: 'Bisteca', preco: 'R$ '+'80'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/bisteca.png' )}
      ,{ id: '14', nome: 'Escargot', preco: 'R$ '+'40'+',00', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/escargot.png' )}
      ,{ id: '15', nome: 'Cebola Frita', preco: 'R$ '+'50'+',90', listaDeIgredientes: 'Frango com queijo\nMolho de Tomate\nCatupiry\nFarinha\nMilho\nTomate\nMiojinho\nPimenta do Reino', imagemIlustrativa: require('../src/assets/images/cebola.jpg' )}
     

];


const renderItem = ({ item }: { item: Item }) => (
    <Animatable.View animation="fadeInLeft" delay={400} style={styles.item}>
        <Text style={[ styles.textNome]}>{item.nome}  </Text>

        <View style={styles.row}>
            <Image  source={item.imagemIlustrativa} style={styles.imagemIlustrativa} />

            <ScrollView>
            <Text style={styles.listaDeIgrediente}>{item.listaDeIgredientes}</Text>
            </ScrollView>
            

        </View>
        <TouchableOpacity style={styles.bottomPreco}><Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.preco}><Text style={styles.textPreco}>{item.preco}</Text></Animatable.View>
         </TouchableOpacity>
           
        
    </Animatable.View >

)
function HomeLanchonete(): React.JSX.Element {

    return (

        <View style={styles.container}>

            <StatusBar backgroundColor='brown' barStyle='light-content' />
            <Animatable.View animation="fadeInDown" delay={600}  style={styles.header}>
            <Animatable.Image  animation="pulse" easing="ease-out" iterationCount="infinite"
                        source={require('./assets/images/logo.png')}
                        style={styles.logo}
                    />
            </Animatable.View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}

            />


            <Animatable.View animation="fadeInUp" delay={600} style={styles.footer}>
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
            </Animatable.View>

        </View>



    );






}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor:'#a4a4a4'
    },
    row: {
        flexDirection: 'row',
        padding: 10,
    },
    item: {

        backgroundColor: 'orange',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:20
        
    },
    listaDeIgrediente: {
        flex:1,
        color: 'black',

    
        fontSize: 15,
        fontFamily: 'sans-serif',
        marginLeft:10,
        overflow:'scroll'
    },
    textNome: {
        fontSize: 35,
        alignItems: 'center',
        padding: 5,
        fontFamily: 'sans-serif',
        color:'brown',
        textAlign:'center',
        borderBottomWidth:1,
        borderColor:'grey'
    },
    header: {
        backgroundColor: 'brown',
        alignItems: 'center',
        paddingVertical: 10,
        height:60,
        borderBottomLeftRadius:45,
        borderBottomRightRadius:40,
        justifyContent:'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'brown',
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
    logo:{width: 50,
        height: 50},

    imagemIlustrativa: {
        width: 150,
        height: 150,
        position: 'relative',
        
        borderTopRightRadius:20,
        borderBottomLeftRadius:20
        
    },
    textPreco:{
        color:'white',
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',

    },
    preco:{
        backgroundColor:'brown',
        width:150,
        height:40,
       
       justifyContent:'center',
       borderRadius:10
      
      
      
    },
    bottomPreco:{
        alignItems:'center',
        borderBottomRightRadius:10
    },

 


})

export default HomeLanchonete;