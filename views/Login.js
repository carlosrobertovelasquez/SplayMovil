import React, {useState, useContext } from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {AUTHENTICATE_USER} from '../gql/user';
import {useMutation} from '@apollo/client';
import {AuthContext} from '../context/context';
import {Button, Text, H1, Input, Form, Item, Toast} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';


const Login = () => {
 const {signIn} = useContext(AuthContext);
  const [email, guardarEmail] = useState('');
  const [password, guardarPassword] = useState('');
  const [mensaje, guardarMensaje] = useState(null);
  const [authenticateUser]=useMutation(AUTHENTICATE_USER)
  
  
  
  //React Navigation
  const navigation = useNavigation();
  const handleSubmit= async()=>{
    if(email===''||password===''){
      //Mostramos error
      Alert.alert('Todos los Campos son Obligatorios',[
        {text:'Okay'}
      ]);
     // guardarMensaje('Todos los Campos son Obligatorios');
      return;
    }
    try {
      //autenticar el usuarios
      //console.log(password);
  
      const {data} = await authenticateUser({
          variables:{
            input:{
              uidFirebase:'12345',
              password
            }
          }
      });
      const {token} = data.authenticateUser; 
      signIn(token);
    } catch (error) {
      console.log(error)
    }
  };
  const mostrarAlerta = () => {
    Toast.show({
      text: mensaje,
      buttonText: 'OK',
      duration: 5000,
    });
  };

  return (
    <Container style={styles.container}>
      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <View style={styles.contenido}>
        <H1 style={styles.titulo}>Splay7</H1>
        <Form>
          <Item inlineLabel last style={styles.input}>
            <Input 
            placeholder="Email"
            onChangeText={(texto) => guardarEmail(texto)}
            
            />
          </Item>
          <Item inlineLabel last style={styles.input}>
            <Input 
            secureTextEntry={true}
            placeholder="Password" 
            onChangeText={(texto) => guardarPassword(texto)}
            />
          </Item>
        </Form>
        <Button 
        style={styles.button} 
        square block
        onPress={() => handleSubmit()}>
          <Text style={styles.botonText}>Iniciar Sesion</Text>
        </Button>
        <Text
          onPress={() => navigation.navigate('CrearCuenta')}
          style={styles.enlace}>
          Crear Cuenta
        </Text>
        {mensaje && mostrarAlerta()}
      </View>
    </Container>
  );
};

export default Login;

const Container = styled.View`
  flex: 1;
  background-color: #00a79d;
`;
const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -50px;
  z-index: -100;
`;
const LeftCircle = styled.View`
  background-color: #c4e0dd;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  left: -50px;
  top: -50px;
`;
const RightCircle = styled.View`
  background-color: #fff;
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  right: -100px;
  top: -200px;
`;

const styles = StyleSheet.create({
  contenido: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
  },
  input: {
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00A79d',
    borderColor: '#FFF',
    borderWidth: 4,
    borderRadius: 6,
  },
  botonText: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  enlace: {
    color: '#FFF',
    marginTop: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
