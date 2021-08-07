import React, { useEffect, useState, useMemo } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export function AulaUseMemo(){

  const [input, setInput] = useState('');
  const [nome, setNome] = useState('');

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


  return(
    <View style={styles.container}>

      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={input}

          onChangeText={ (text) => setInput(text) }
        />

        <TouchableOpacity onPress={ getName }>
          <Text style={styles.botao}> + </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.nome}> {nome} </Text>
      <Text style={styles.nome}> Possui: {letrasNome} letras </Text>

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