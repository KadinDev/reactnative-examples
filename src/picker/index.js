import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

//npm add @react-native-community/picker
import { Picker } from '@react-native-community/picker';

export function ModelPicker(){

  const imgCars = {
    volkswagen: 'https://s2.glbimg.com/Mto8vM88NLAiu4rwRopyGgtfps8=/0x0:1980x1320/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/p/UPx4bfSsWPRZjX3GavpQ/large-13769-2022passatlimitededition.jpg',
    fiat: 'https://uno.fiat.com.br/content/dam/fiat/products/195/a4z/2/2021/page/360/806/29.jpg.thumb.1280.1280.png',
    ford: 'https://img0.icarros.com/dbimg/imgnoticia/4/26712_1',
    honda: 'https://istoe.com.br/wp-content/uploads/sites/14/istoeimagens/imagens/mi_5314250554227040.jpg'
  }

  const [carSelected, setCarSelected] = useState(0);
  const [cars, setCars] = useState([
    { key: 1, name: 'Volkswagen Gol', valor: 62.000, image: imgCars.volkswagen },
    { key: 2, name: 'Fiat Uno', valor: 60.400, image: imgCars.fiat },
    { key: 3, name: 'Ford Ranger', valor: 175.000, image: imgCars.ford },
    { key: 4, name: 'Honda Civic', valor: 135.000, image: imgCars.honda },
  ])

  // Picker de forma dinâmica pegando o array acima
  let carsItems = cars.map( (value, key) => {
    return <Picker.Item
      key={key}
      value={key}//tbm recebendo a key
      label={value.name}
    />
  } )

  return(
    <View style={styles.container}>

        <Picker
            style={{color: '#111'}}
            selectedValue={carSelected} //valor selecionado

            //itemValue = valor do item
            //itemIndex = index do item
            //setCarSelected(itemValue) pega o que eu selecionei e passa para o setCarSelected
            onValueChange={ (itemValue, itemIndex)  => {setCarSelected(itemValue)} } //toda vez que o valor mudar ele vai chamar essa propriedade
        >

          {carsItems}

        </Picker>

        <View style={styles.containerCar}>

          <Text style={styles.name}> { cars[carSelected].name } </Text>
          <Image style={styles.image} source={{ uri: cars[carSelected].image }} />
          <Text style={styles.price}> R$ { cars[carSelected].valor.toFixed(2) } </Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#f1f1f1'
  },

  containerCar: {
    marginTop: 20,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 30, 
  },

  name: {
    fontSize: 25,
    textAlign: 'right',
    marginBottom: 2
  },

  image: {
    width: '100%',
    height: 250,
  },

  price: {
    color: '#FFF',
    fontWeight: 'bold',
    backgroundColor: '#111',
    width: '30%',
    padding: 5,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
    marginTop: -20,
    marginLeft: 15
  }

})