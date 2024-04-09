
import React from 'react';
import HomeLanchonete from './src/HomeLanchonete';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Routes from './src/assets/Routes/Index';
import Welcome from './src/assets/Welcome/Welcome';
import SignIn from './src/assets/SignIn/SignIn';
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroCliente from './src/assets/Cadastro/cadastroCliente';






function App(): JSX.Element {

  return (
   
    <HomeLanchonete/>
    //<CadastroCliente/>
   
      //<CadastroProduto/>
   
  

  );
}



export default App;
