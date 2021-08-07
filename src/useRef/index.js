import React, { useEffect, useState, useMemo, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export function AulaUseRef(){

  const [input, setInput] = useState('');
  const [nome, setNome] = useState('');

  // trabalhando com useRef
  const inputRef = useRef(null) //null pq não temos

  useEffect( () => {

    async function loadName(){
      
      await AsyncStorage.getItem('@nome').then((value) => {
        setNome(value)
      } )
    }

    loadName();
  
  }, [] )

  async function getName(){
    
    await AsyncStorage.setItem( '@nome', input )

    setNome(input);

    setInput('') //vai limpar o input
  }


  //const letrasNome = nome.length;
  const letrasNome = useMemo( () => {
    // quando o nome mudar é que eu chamo essa função
    return nome.length;
  }, [nome] );


  function chamarInput(){
    // current, estamos acessando aos dados do textInput,
    // focus, ele vai dar um foco no textInput se ainda não clicamos nele
    //inputRef.current.focus();

    inputRef.current.clear();
  }

  return(
    <View style={styles.container}>

      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={input}

          onChangeText={ (text) => setInput(text) }
          ref={inputRef} //como a referência aqui é o inputRef, criado na linha 20,
          //quer dizer que quando eu acessar o inputRef estou acessando essa instância do TextInput
        />

        <TouchableOpacity onPress={ getName }>
          <Text style={styles.botao}> + </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.nome}> {nome} </Text>
      <Text style={styles.nome}> Possui: {letrasNome} letras </Text>

      <TouchableOpacity onPress={chamarInput}>
        <Text> Chamar Input </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    alignItems: 'center',
    backgroundColor: '#f1f1f1'
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  nome: {
    marginTop: 15,
    fontSize: 30
  }
})