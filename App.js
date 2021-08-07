//para usar o Navigation Drawer
import 'react-native-gesture-handler'; 

import React from 'react';

// react navigation
//npm install @react-navigation/native@^5.x
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
//npm install @react-navigation/stack@^5.x
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import {
  StatusBar
} from 'react-native';

import { DevLimite } from './src/devLimite';

import { ModelPicker } from './src/picker';
import { ModelSilder } from './src/slider';
import { ModelSwitch } from './src/switch';
import { UseEffect1 } from './src/useEffectEx01';
import { AppAsyncStorage } from './src/AsyncStorage';
import { AulaUseMemo } from './src/useMemo';
import { AulaUseRef } from './src/useRef';
import { AulaModal } from './src/Modal';

// Navegação
import { Icons } from './src/navegacao/icons';

//telas para navegação
//import { Home } from './src/tabsNavigations/Home';
//import { Sobre } from './src/tabsNavigations/Sobre';
//import { Contato } from './src/tabsNavigations/Contato';

//telas de navegação do drawer
import { Home } from './src/usandoDrawer/Home';
import { Sobre } from './src/usandoDrawer/Sobre';
import { Contato } from './src/usandoDrawer/Contato';

import { createDrawerNavigator } from '@react-navigation/drawer';
// Usando o Drawer / navagador lateral

// meu Drawer personalizado
import { CustomDrawer } from './src/components/CustomDrawer';

const Drawer = createDrawerNavigator();

/*
export default function App(){

  return (
    <NavigationContainer>

      <Drawer.Navigator
        //esse tira o Drawer padrão e coloca o meu personalizado
        drawerContent={CustomDrawer}
      >

        <Drawer.Screen 
          name="Home" 
          component={Home}
          options={{
            headerShown: false //tirar header 
          }}
        />

        <Drawer.Screen 
          name="Sobre" 
          component={Sobre}
          options={{
            headerShown: false
          }}
        />

        <Drawer.Screen 
          name="Contato" 
          component={Contato}
          options={{
            headerShown: false
          }} 
        />

      </Drawer.Navigator>

    </NavigationContainer>
  )
}
*/


// ================================================
/*
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Home: {
    name: 'home'
  },
  Sobre: {
    name: 'user'
  },
  Contato: {
    name: 'phone'
  }
}
*/

/*

Assim colocamos as telas de navegações com a parte
de Contatos separada! ou seja, juntamos dois modos
de navegação no mesmo projeto

export function Tabs(){
  return (

    <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ( { color, size } ) => {
          //aqui pego os names do objeto const icons, linha 36. e passo para
          // o name dos route.name
          const { name } = icons[route.name];

          return <Icon name={name} color={color} size={size} />
        }
      }) }

      tabBarOptions ={{
        style: {
          backgroundColor: '#111', //cor de fundo do navegador
        },
        activeTintColor: '#fff',
        // muda a cor quando nao está clicado
        //inactiveTintColor: 'red'
      }}
    >

      <Tab.Screen name="Home" component={Home} />
      
      <Tab.Screen name="Sobre" component={Sobre} />
      
      

    </Tab.Navigator>

  )
}

export default function App(){
  return(
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />

        <Stack.Screen name="Contato" component={Contato} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}
*/
//====================================================================================


/*

Assim é apenas as telas de navegações

export default function App(){
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={ ({route}) => ({
          tabBarIcon: ( { color, size } ) => {
            //aqui pego os names do objeto const icons, linha 36. e passo para
            // o name dos route.name
            const { name } = icons[route.name];

            return <Icon name={name} color={color} size={size} />
          }
        }) }

        tabBarOptions ={{
          style: {
            backgroundColor: '#111', //cor de fundo do navegador
          },
          activeTintColor: '#fff',
          // muda a cor quando nao está clicado
          //inactiveTintColor: 'red'
        }}
      >

        <Tab.Screen name="Home" component={Home} />
        
        <Tab.Screen name="Sobre" component={Sobre} />
        
        <Tab.Screen name="Contato" component={Contato} />

      </Tab.Navigator>

    </NavigationContainer>
  )
}
*/

//====================================================================




//Assim estava apenas usando os Icons

export default function App(){
  return(
    <>
      <StatusBar backgroundColor='#FFF' barStyle="dark-content" />
      <DevLimite/>
    </>
  )
}
