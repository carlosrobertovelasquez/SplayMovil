import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,Button,ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTabScreen from './MainTabScreen';
import {AuthContext} from '../context/context'
import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from 'jwt-decode';
import AppBar from '../components/AppBar';
import ToolBar from '../components/ToolBar';
import Users from '../components/Users';
import Person from '../components/Person';
import Feeds from '../components/Feeds';
import {Container,Card, UserInfo, UserImg,UserInfoText,UserName,PostTime} from '../styles/FeedStyles'


const wall = ({navigation}) => {
  
  const {signOut} = React.useContext(AuthContext)
  const [auth, setAuth] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    userToken();  
  }, [])
   
const userToken = async()=>{
    try {
     // await AsyncStorage.removeItem('userToken')
      const Token = await AsyncStorage.getItem('userToken');
      if(Token !==null){
        const User = jwtDecode(Token);
        setUserId(User.id);ß
      }else{
        signOut();
      }
        
    } catch (error) {
      console.log(error)
    }
  }
  
  
  
    return (
        <Container>
          
          <AppBar/>
            <ToolBar userId={userId}/>
            
            <Users userId={userId}/>
           
            <Feeds userId={userId}/>
            
        </Container>
    )
}

export default wall;

