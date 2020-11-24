import 'react-native-gesture-handler';
import React,{useState,useEffect,useMemo} from 'react';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {View,ActivityIndicator} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from './context/context';
import jwtDecode from 'jwt-decode';
import RootStackScreen from './views/RootStackScreen';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import MainTabScreen from './views/MainTabScreen';

const Drawer = createDrawerNavigator();
const Stack=createStackNavigator();
const App = () => {
const initialLoginState={
  isLoading:true,
  userName:null,
  userToken:null,
};

const loginReducer=(prevState,action)=>{
  switch(action.type){
    case 'RETRIEVE_TOKEN':
    return{
        ...prevState,
        userToken:action.token,
        isLoading:false,
      };
    case 'LOGIN':
      return{
        ...prevState,
        userName:action.id,
        userToken:action.token,
        isLoading:false,
      };
    case 'LOGOUT':
      return{
        ...prevState,
        userName:null,
        userToken:null,
        isLoading:false,
      };
    case 'REGISTER':
      return{
        ...prevState,
        userName:action.id,
        userToken:action.token,
        isLoading:false,
      };        
  }
};

const [loginState,dispatch]=React.useReducer(loginReducer,initialLoginState);
  
const authContext=useMemo(() =>({
    signIn:async(foundUser)=>{
      //setUserToken('fgkj');
      //setIsLoading(false);
      const Auth=jwtDecode(foundUser)
      const userToken=foundUser
      const userName=Auth.id
        try {
          await AsyncStorage.setItem('userToken',userToken)
        } catch (error) {
          console.log(error)
        }
      
      dispatch({type:'LOGIN',id:userName,token:userToken})
    },
    signOut:async()=>{
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (error) {
        console.log(error)
      }
      dispatch({type:'LOGOUT'})
    },
    signUp:()=>{
     setUserToken('fgkl');
     setIsLoading(flase);
    },
  }) , [] );

useEffect(() => {
    setTimeout(async()=>{
      let userToken;
      userToken=null;
      try {
        userToken=await AsyncStorage.getItem('userToken');
        
      } catch (error) {
        console.log(error)
      }
      dispatch({type:'REGISTER',token:'userToken'})
    },1000)
  }, [])
 


if(loginState.isLoading){
  return(
    <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  )
}

const MyTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme,
    background:'#c4e0dd',
  },
};
  return (
      <AuthContext.Provider value={authContext}>        
        <NavigationContainer theme={MyTheme}  >
         {loginState.userToken !== null?(
           <Drawer.Navigator> 
             <Drawer.Screen 
             name="Splay7"
             component={MainTabScreen}
            
             />
           </Drawer.Navigator>
         )
        :<RootStackScreen/>
        }
        </NavigationContainer>
      </AuthContext.Provider> 
  
  )
};

export default App;

const Button=styled.TouchableOpacity`
width:42px;
height:42px;
align-items:center;
border-radius:21px;
background:#00a79d;
justify-content:center;
margin-left:16px;
`;