import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

// (props), ou seja, recebo atráves das propriedades,
//assim  terei acesso ao fechar={ closeModal } da linha 39
export function Details( props ){
    return(
        <View style={styles.container}>
            
            <View style={styles.modal}>
                <Text style={styles.title}> MODAL ABERTO </Text>
                
                <Button
                    title="Back"
                    onPress={ props.fechar } // e assim pego o fechar={ closeModal } da linha 39
                />
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    modal: {
        backgroundColor: '#292929',
        width: '100%',
        height: 350,
        borderRadius: 5
    },
    title: {
        fontSize: 25,
        color: '#FFF',
        textAlign: 'center',
        padding: 20,
    }
})