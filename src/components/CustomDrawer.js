import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { 
    DrawerContentScrollView, //se tiver muito item no menu, ele vai ser tipo uma ScrollView
    DrawerItemList, //esse serão os item, todas as screens 
} from '@react-navigation/drawer';

// { ...props }, assim passo todas as propriedades pro meu CustomDrawer
export function CustomDrawer(props){
    return (

        <DrawerContentScrollView {...props} >
            <View style={{
                width: '100%', height: 77, alignItems: 'center', justifyContent: 'center',
                marginTop: 35
            }} >

                <Image
                    source={ require('../img/perfil.png') }
                    style={{width: 65, height: 65}}
                />
                <Text style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom: 25}}> 
                    Bem Vindo!
                </Text>

            </View>
            <DrawerItemList {...props} />

        </DrawerContentScrollView>

    )
}