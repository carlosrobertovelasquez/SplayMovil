import React,{useContext,useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin,statusCodes } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {AUTHENTICATE_USER} from '../gql/user'
import {useMutation} from '@apollo/client';
import {AuthContext} from '../context/context';
import {View,ActivityIndicator} from 'react-native';




const Inicio = () => {
const [userUid, setUserUid] = useState('');
const {signIn} = useContext(AuthContext);  
const navigation = useNavigation();
const [cargar, setCargar] = useState(true)
//const token = AsyncStorage.getItem('userToken');
const [authenticateUser]=useMutation(AUTHENTICATE_USER)

GoogleSignin.configure();  
GoogleSignin.configure({
  webClientId: '665609040430-g65or3lc2rvrmltag2tnfqnjmle5fa41.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
});

async function onGoogleButtonPress() {
  setCargar(false);
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  const google= await auth().signInWithCredential(googleCredential);
  const {user}=google;
  const {uid}=user;
  
// Nos conectamos a mongodb
//console.log(user.uid);
  try {
    const {data} = await authenticateUser({
      variables:{
        input:{
          uidFirebase:user.uid,
          password:'123456'
        }
      }
  });
   
  const {token} = data.authenticateUser; 
      signIn(token);
  
  } catch (error) {
    console.log(error)
    navigation.navigate('CrearCuenta',{userUid:user.uid})
  }
  setCargar(true);  
}

  return (
   <>
   {cargar ? ( 
      <Contenedor>
      <ContenedorLogo>
        <Logo source={require('../assets/SP71.png')} />
      </ContenedorLogo>
      <ContenedorTitulo>
        <Titulo>Crea tu Cuenta</Titulo>
        <Row>
          <SubTitulo>En simples y cortos pasos</SubTitulo>
        </Row>
      </ContenedorTitulo>
      <BottonCorreo onPress={() => navigation.navigate('Login')}>
        <Icon name="mail-outline" size={25} color="black" />
        <TextBtnCorreo>Continuar con correo</TextBtnCorreo>
      </BottonCorreo>
      <LineaDiv />
      <BottonGoogle
      onPress={() => onGoogleButtonPress()}
      >
        <Icon name="logo-google" size={25} color="white" />
        <TextBtn>Continuar con Google</TextBtn>
      </BottonGoogle>
      <LineaDiv />
      <BottonFacebook>
        <Icon name="logo-facebook" size={25} color="white" />
        <TextBtn>Continuar con Facebook</TextBtn>
      </BottonFacebook>
      <LineaDiv />
      <BottonPhone>
        <Icon name="call-outline" size={25} color="white" />
        <TextBtn>Continuar con Telefono</TextBtn>
      </BottonPhone>
      <LineaDiv />
      <ContenedorPoiliticas>
        <TextPolitica>
          Al continuar,esta aceptando los Terminos y condiciones de uso y
          Politica de privacidad de
        </TextPolitica>
        <Row>
          <TextPolitica> Splay7 ® 2020</TextPolitica>
        </Row>
      </ContenedorPoiliticas>
    </Contenedor>
    ):(
      <Contenedor>
      <SubTitulo>Cargando....</SubTitulo>
      <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
          <ActivityIndicator size="large"/>
        </View>
      </Contenedor>
    )}
    </>
  );
};

export default Inicio;
const Contenedor = styled.SafeAreaView`
  flex: 1;
  background-color: #00a79d;
`;
const Row = styled.View``;

const ContenedorLogo = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 25px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.Image`
  width: 215px;
  height: 75px;
`;

const ContenedorTitulo = styled.View`
  flex-direction: column;
  margin-top: 10px;
  height: 200px;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Titulo = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #595b61;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
const SubTitulo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #595b61;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
const BottonCorreo = styled.TouchableOpacity`
  flex-direction: row;
  margin: 0 32px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 6px;
`;
const TextBtnCorreo = styled.Text`
  background-color: #fff;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: #595b61;
  padding-left: 30px;
`;
const LineaDiv = styled.View`
  width: 100%;
  height: 12px;
`;

const TextBtn = styled.Text`
  align-items: center;
  text-align: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  padding-left: 20px;
`;
const BottonGoogle = styled.TouchableOpacity`
  flex-direction: row;
  margin: 0 32px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #00a79d;
  border-radius: 6px;
  border-color: #595b61;
  border-width: 1px;
`;
const BottonFacebook = styled.TouchableOpacity`
  flex-direction: row;
  margin: 0 32px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #00a79d;
  border-radius: 6px;
  border-color: #595b61;
  border-width: 1px;
`;
const BottonPhone = styled.TouchableOpacity`
  flex-direction: row;
  margin: 0 32px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #00a79d;
  border-radius: 6px;
  border-color: #595b61;
  border-width: 1px;
`;

const ContenedorPoiliticas = styled.View`
  width: 100%;
  height: 100px;
  padding: 25px;
  align-items: center;
  justify-content: center;
`;
const TextPolitica = styled.Text`
  color: #fff;
  font-size: 18px;
  align-items: center;
  text-align: justify;
  justify-content: center;
`;
