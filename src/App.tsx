import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import Parimpar from "./componentes/Parimpar";

import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";

import UsuarioLogado from "./componentes/UsuarioLogado";
import If from "./componentes/If";

import Botao from "./componentes/Botao";
import Contador from "./componentes/Contador";

export default class App extends Component{
  render() {
    return (
    
      <View style={estilos.container}>
        {/*<Simples texto='Pedro Henrique' />*/}

        {/*<Frag titulo="Cadastro" 
        subTitulo="Tela de Cadastro de Produto" />*/}

        {/*<Parimpar numero={9}></Parimpar>*/}

        {/*<Familia>
          <Membro nome="Ana" sobrenome="Silva" />
          <Membro nome="José" sobrenome="Silva" />
        </Familia>*/}

        {/*<UsuarioLogado usuario={ {nome:'teste', email:'teste@teste.com'} }/>
        <UsuarioLogado usuario={ {nome:'teste 2'} } />
        <UsuarioLogado usuario={ {email:'teste@teste.com'} } />        
        <UsuarioLogado usuario={ null } />
        <UsuarioLogado usuario={ {} } />*/}

        {/*<Botao />*/}
        
        <Contador valorInicial = {50} />
        
      </View>
    );      
  }
}

  const estilos = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    fonte: {
      fontSize: 50,
    },
  });