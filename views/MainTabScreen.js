import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'
import {View,Text}from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import Wall from './wall';
import Perfil from './Perfil';
import Mensaje from './Mensaje';
import Friend from '../components/Friend';
import Publication from '../components/Publication';
import Notification from '../components/Notification';
import FeedHeader from '../components/FeedHeader';
import Following from '../components/Friend/Following'
import Follw from '../components/Friend/Follw'
const Stack=createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const FeedStack=({navigation})=>( 
  <Stack.Navigator>
    <Stack.Screen
    name='Publicaciones'
    component={Publication}
    />
    <Stack.Screen
    name='Publicacioness'
    component={Publication}
    options={{
      title:"publicaciones"
    }}
    />
  </Stack.Navigator>
);

const FriendStack=({navigation})=>(
  <Stack.Navigator>
    <Stack.Screen
    name='Personas que no Seguimos'
    component={Friend}
    />
    <Stack.Screen
    name='Siguiendo'
    component={Following}
    />
    <Stack.Screen
    name='Seguir'
    component={Follw}
    />
  </Stack.Navigator>
)


const MainTabScreen = () => {
    return (
        <Tab.Navigator
        initialRouteName="Wall"
        activeColor="#fff"
        barStyle={{backgroundColor:'#00aea2'}}
      >
        <Tab.Screen
          name="Wall"
          component={Wall}
          options={{
            tabBarLabel: 'Muro',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Personas"
          component={FriendStack}
          options={{
            title:'Mi red',
            tabBarLabel: 'Mi red',
            tabBarIcon: ({ color }) => (
              <Feather name="users" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Publicaciones"
          component={FeedStack}
          options={{
            tabBarLabel: 'Publicacion',
            tabBarIcon: ({ color }) => (
              <Feather name="plus-circle" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notificaciones"
          component={Notification}
          options={{
            tabBarLabel: 'Notificaciones',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell-outline" color={color} size={26} />
            ),
          }}
        />
        
        <Tab.Screen
          name="menu"
          component={Perfil}
          options={{
            tabBarLabel: 'menu',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="menu" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator> 
    )
}

export default MainTabScreen
