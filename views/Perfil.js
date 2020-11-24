import React,{useContext} from 'react';
import styled from 'styled-components/native';
import {AuthContext} from '../context/context';
import { View,Text,Button } from 'react-native';
const Perfil = () => {
    const {signOut}=useContext(AuthContext)
    return (
        <Container>
        <View>
            <Text>Hola desde Perfil</Text>
            <Button
            title='Cerrar sesion'
            onPress={()=>signOut()}
            />
        </View>
        </Container>
    )
}

export default Perfil

const Container =styled.SafeAreaView`
flex:1;
justify-content:center;
align-items:center;

`;