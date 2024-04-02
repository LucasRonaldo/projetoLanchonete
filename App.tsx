
import React from 'react';
import HomeLanchonete from './src/HomeLanchonete';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/assets/Routes/Index';
import Welcome from './src/assets/Welcome/Welcome';
import SignIn from './src/assets/SignIn/SignIn';
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroAdm from './src/assets/Cadastro/cadastroAdm';





function App(): JSX.Element {

  return (
   
   
    <CadastroProduto/>
  

  );
}



export default App;
