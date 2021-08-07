import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

//yarn add @react-native-community/slider
import Slider from '@react-native-community/slider';

export function ModelSilder(){
  
  const [valor, setValor] = useState(1500);

  return(
    <View style={styles.container}>

      <Slider
        style={{ width: "100%", height: 5, backgroundColor: '#888', }}
        minimumValue={0}
        maximumValue={4500}
        value={valor}
        onValueChange={ (valorSelecionado) => setValor(valorSelecionado)  }

        minimumTrackTintColor='transparent'
        maximumTrackTintColor='transparent'
        thumbTintColor="#110"
      />

      <Text> Valor: R${valor.toFixed(0)} </Text>
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