import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function Home(){
    const navigation = useNavigation();


    function irSobre(){
        navigation.navigate('Sobre', { nome: 'Ricardo', email: 'ricardo@hotmail.com' } );
    }

    return (
        <View style={styles.container}>
            <Text> Home </Text>

            <Button title="ir para Sobre" onPress={irSobre} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})