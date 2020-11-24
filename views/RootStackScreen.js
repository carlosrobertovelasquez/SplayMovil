import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './Inicio';
import Login from './Login';
import CrearCuenta from './CrearCuenta';

const RootStack =createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Inicio" component={Inicio}/>
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="CrearCuenta" component={CrearCuenta}/>

    </RootStack.Navigator>
)

export default RootStackScreen
