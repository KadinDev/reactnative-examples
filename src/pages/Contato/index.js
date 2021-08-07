import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export function Contato(){

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Text> Contato </Text>

            <Button
                title="Voltar Tela"
                onPress={ () => navigation.goBack() }
            />

            <Button
                title="Home"
                //voltará lá para o inicio, para o home
                onPress={ () => navigation.dispatch(StackActions.popToTop) }
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