import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,

  Switch
} from 'react-native';

export function ModelSwitch(){
  
  //o Switch tem os valores true ou false, ativo ou desativo
  const [status, setStatus] = useState(false);

  return(
    <View style={styles.container}>

      <Switch
        value={status}
        onValueChange={ (valorSelecionado) => setStatus(valorSelecionado) }

        trackColor={{ true: 'black', false: 'red' }}
        
        thumbColor="white" //pode passar uma cor fixa ou de forma dinâmica conforme abaixo
        //thumbColor={status ? 'black' : 'red'}
      />

      <Text> Status: {status ? 'Ativo' : 'Inativo' } </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#f1f1f1'
  },

  

})