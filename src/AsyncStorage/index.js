import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export function AppAsyncStorage(){

  const [input, setInput] = useState('');
  const [nome, setNome] = useState('');

  // quando o app for montao em tela chamará o que tem no useEffect
  useEffect( () => {

    async function loadName(){
      
      // @nome, é a chave
      // .then, significa que deu tudo certo
      // ((value)), o resultado dessa chave ('@nome'), o que estiver salvo pelo AsynStorage
      // virá nessa variável value
      await AsyncStorage.getItem('@nome').then((value) => {
        setNome(value)
      } )
    }

    loadName();
  
  }, [] )

  async function getName(){
    
    // O AsyncStorage espera uma key e um value, ambos strings
    // @nome é a key que escolhi o nome
    // o input é o value
    // Obs: passo await onde eu quero que ele espere essa requisição.
    // aqui esperará salvar o item
    await AsyncStorage.setItem( '@nome', input )

    setNome(input);

    setInput('') //vai limpar o input
  }

  return(
    <View style={styles.container}>

      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={input}

          //pega o texto que digitar e passa ele para o setInput
          onChangeText={ (text) => setInput(text) }
        />

        <TouchableOpacity onPress={ getName }>
          <Text style={styles.botao}> + </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.nome}> {nome} </Text>

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