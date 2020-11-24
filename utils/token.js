import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from 'jwt-decode';
import {TOKEN} from './constants'

export function setToken(token){
    AsyncStorage.setItem(TOKEN,token);
}

export function getToken(){
    return AsyncStorage.getItem(TOKEN);
}
export function decodeToken(token){
    return jwtDecode(token)
}

export function removeToken(){
    AsyncStorage.removeItem(TOKEN)
}