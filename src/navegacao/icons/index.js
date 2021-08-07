import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export function Icons(){
    return (
        <View style={styles.container}>
            <Text> Introdução aos Icons </Text>

            <FontAwesome
                name="home"
                size={35}
                color='#11118c'
            />

            <FontAwesome
                name="user"
                size={35}
                color='#54A300'
            />

            <Feather
                name="gift"
                size={35}
                color='red'
            />


            <TouchableOpacity style={styles.btnYoutube} >
                <FontAwesome
                    name="youtube"
                    size={35}
                    color='#FFF'
                />
                <Text style={styles.btnText}>Acessar canal</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnYoutube: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    btnText: {
        paddingLeft: 10,
        color: '#fff'
    }
})