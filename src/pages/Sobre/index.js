import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// todas as telas dentro do navigation temos uma propriedade chamada route, e aqui pegamos ela
// ela tem acesso aos params mandados para ela.
export function Sobre( {route} ){
    // e dessa forma: {route.params.nome}, pegamos o nome que foi passado
    // no Home linha 12 / navigation.navigate('Sobre', { nome: 'Ricardo',

    const navigation = useNavigation();

    navigation.setOptions({
        //assim pega o nome e adiciona junto com o title do header
        title: `Sobre ${route.params?.nome}`
    })

    return (
        <View style={styles.container}>
            <Text> Sobre </Text>

            <Text> {route.params?.nome} </Text>
            <Text> {route.params?.email} </Text>

            <Button
                title="Voltar para Home"
                onPress={ () => navigation.goBack() }
            />

            <Button
                title="Contato"
                onPress={ () => navigation.navigate('Contato') }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})