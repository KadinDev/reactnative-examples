import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal
} from 'react-native';

import { Details } from './component';

export function AulaModal(){

  const [modal, setModal] = useState(false)

  function openModal(){
    setModal(true)
  };

  function closeModal(){
    setModal(false)
  };

  return(
    <View style={styles.container}>

      <Button
        title="Acessar"
        onPress={ openModal }
      />

      <Modal
        visible={modal}
        animationType="slide"
        transparent={true} //me permite criar a estilização do modal
      >
        <Details
          fechar={ closeModal } //assim mando como via propriedades
          // mando uma chamada fechar, e executa uma função chamada
          // closeModal
        />

      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  modal: {
    flex: 1,
    paddingTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  }
})