import React, { 
  useState, 
  useEffect, 
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';

export function UseEffect1(){
  
  const [contador, setContador] = useState(0);
  const [render, setRender] = useState(true);

  //toda vez que o app montar em tela ele chama o que estiver no useEffect,
  //isso é chamado uma única vez
  useEffect( () => {


    console.log(`O valor atual é ${contador}`)

  }, [contador] ); // passando o contador para esse array de dependência, ele vai ficar
  // monitorando, toda vez que o valor mudar, vai chamar o que tem dentro do useEffect.
  // pade passar mais opções além do contador. só inserir uma vírgula na frente


  return(
    <View style={styles.container}>

      <Button title="Aumentar" onPress={ () => setContador(contador + 1) } />
      
      <Text style={{fontSize: 20}}> {contador} </Text>
      
      <Button title="Diminuir" onPress={ () => setContador(contador - 1) } />

      <Button title="Esconder Nome" onPress={ () => setRender(false)}/>

      { render && <Nome/> }

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f2f3'
  },


})


function Nome(){

  useEffect( () => {
    console.log('Componente nome foi montado na tela')



    // esse modelo significa que ele só será chamado quando o componente
    //for desmontado na tela
    return () => {console.log('Componente desmontado')}
  }, [] )

  return <Text style={{marginTop: 20}}> RICARDO </Text>
}