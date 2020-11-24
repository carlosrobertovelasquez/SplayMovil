import React, {useState, useEffect,useContext} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/context';
import axios from 'axios';
import {useMutation} from '@apollo/client';
import {NEW_ACCOUNT,AUTHENTICATE_USER} from '../gql/user';
import {Picker} from '@react-native-community/picker';

import {
  Container,
  Button,
  Text,
  H1,
  Input,
  Item,
  Toast,
  Row,
} from 'native-base';

function useCoordenads() {
  const [coordenadas, setCoordenadas] = useState({
    city: null,
    latitude: null,
    longitude: null,
    country_name: null,
    countryCode: null,
  });
  useEffect(() => {
    axios
      .get('https://ipapi.co/json/')
      .then((response) => {
        let data = response.data;
        setCoordenadas({
          city: data.city,
          country_name: data.country_name,
          latitude: data.latitude,
          longitude: data.longitude,
          countryCode: data.country_calling_code,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return coordenadas;
}

const CrearCuenta = (props) => {
  console.log(props)
  const [nombre, guardarNombre] = useState('');
  const [apellido, guardarApellido] = useState('');
  const [email, guardarEmail] = useState('');
  const [password, guardarPassword] = useState('');
  const [dia, guardarDia] = useState('');
  const [mes, guardarMes] = useState('');
  const [ano, guardarAno] = useState('');
  const [sexo, guardarSexo] = useState('');
  const [cuenta, guardarCuenta] = useState('');
  const [mensaje, guardarMensaje] = useState(null);
  const {signIn} = useContext(AuthContext);
  //Calculamos los anos
  const f = new Date();
  const ye = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(f);
  const firtsYear = ye;
  const year = new Array(76).fill({label: null}).map((item, id) => {
    return {valor: `${firtsYear - id}`};
  });

  //Cuando el usuario presiona en crear cuenta
  const [newUser] = useMutation(NEW_ACCOUNT);
  const [authenticateUser]=useMutation(AUTHENTICATE_USER);
  //llamamos coordenadas
  const coordenadas = useCoordenads();
  const navigation = useNavigation();
  const handleSubmit = async () => {
    //validar
    if (
      nombre === '' ||
      apellido === '' ||
      email === '' ||
      password === '' ||
      dia === '' ||
      mes === '' ||
      ano === '' ||
      sexo === '' ||
      cuenta === ''
    ) {
      //mostramos error
      guardarMensaje('Todos los campos son obligatorios');
      return;
    }
    //password al menos 6 caracteres
    if (password.length < 6) {
      guardarMensaje('El Password debe de ser de al menos 6 caracteres');
      return;
    }
    //guardamos el usuario
    const {city, country_name, latitude, longitude, countryCode} = coordenadas;
    try {
      const {error} = await newUser({
        variables: {
          input: {
            name: nombre,
            lastname: apellido,
            email: email,
            password:'123456',
            gender: sexo,
            birthdayDay: dia,
            birthdayMonth: mes,
            birthdayYear: ano,
            country: country_name,
            city: city,
            latitude: latitude,
            longitude: longitude,
            type: cuenta,
            uidFirebase:props.route.params.userUid,
          },
        },
      });
      //guardarMensaje('se Creo corretamente');
      const {data: dataAuth} = await authenticateUser({
        variables:{
          input:{
            uidFirebase:props.route.params.userUid,
            password:'123456'
          }
        }
    });
    const {token} = dataAuth.authenticateUser; 
    signIn(token);


  } catch (error) {
      guardarMensaje(error.message);
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
      <ScrollView>
        <View style={styles.contenido}>
          <H1 style={styles.titulo}>Splay7</H1>

          <Item inlineLabel last style={styles.input}>
            <Input
              placeholder="Nombre"
              onChangeText={(texto) => guardarNombre(texto)}
            />
          </Item>
          
          <Item inlineLabel last style={styles.input}>
            <Input
              placeholder="Apellido"
              onChangeText={(texto) => guardarApellido(texto)}
            />
          </Item>
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
          <View>
            <Text>Fecha Nacimiento</Text>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <Picker
                mode={'dropdown'}
                style={{width: 90, marginLeft: 50}}
                accessibilityLabel="Dia"
                itemStyle={{
                  height: 50,
                  borderWidth: 2,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                }}
                selectedValue={dia}
                onValueChange={(value) => guardarDia(value)}>
                <Picker.Item label="Dia" value="" />
                <Picker.Item label="01" value="01" />
                <Picker.Item label="02" value="02" />
                <Picker.Item label="03" value="03" />
                <Picker.Item label="04" value="04" />
                <Picker.Item label="05" value="05" />
                <Picker.Item label="06" value="06" />
                <Picker.Item label="07" value="07" />
                <Picker.Item label="08" value="08" />
                <Picker.Item label="09" value="09" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
                <Picker.Item label="13" value="13" />
                <Picker.Item label="14" value="14" />
                <Picker.Item label="15" value="15" />
                <Picker.Item label="16" value="16" />
                <Picker.Item label="17" value="17" />
                <Picker.Item label="18" value="18" />
                <Picker.Item label="19" value="19" />
                <Picker.Item label="20" value="20" />
                <Picker.Item label="21" value="21" />
                <Picker.Item label="22" value="22" />
                <Picker.Item label="23" value="23" />
                <Picker.Item label="24" value="24" />
                <Picker.Item label="25" value="25" />
                <Picker.Item label="26" value="26" />
                <Picker.Item label="27" value="27" />
                <Picker.Item label="28" value="28" />
                <Picker.Item label="29" value="29" />
                <Picker.Item label="30" value="30" />
                <Picker.Item label="31" value="31" />
              </Picker>
              <Picker
                mode={'dropdown'}
                style={{width: 90}}
                accessibilityLabel="Mes"
                itemStyle={{
                  height: 50,
                  borderWidth: 2,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                }}
                selectedValue={mes}
                onValueChange={(value) => guardarMes(value)}>
                <Picker.Item label="Mes" value="" />
                <Picker.Item label="Ene" value="01" />
                <Picker.Item label="Feb" value="02" />
                <Picker.Item label="Mar" value="03" />
                <Picker.Item label="Abr" value="04" />
                <Picker.Item label="May" value="05" />
                <Picker.Item label="Jun" value="06" />
                <Picker.Item label="Jul" value="07" />
                <Picker.Item label="Ago" value="08" />
                <Picker.Item label="Sep" value="09" />
                <Picker.Item label="Oct" value="10" />
                <Picker.Item label="Nov" value="11" />
                <Picker.Item label="Dic" value="12" />
              </Picker>
              <Picker
                mode={'dropdown'}
                style={{width: 90, height: 50}}
                itemStyle={{
                  height: 50,
                  borderWidth: 2,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                }}
                selectedValue={ano}
                onValueChange={(value) => guardarAno(value)}>
                <Picker.Item label="Año" value="" />
                {year.map((v, index) => {
                  return (
                    <Picker.Item
                      key={v.valor}
                      label={v.valor}
                      value={v.valor}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
          <View>
            <View>
              <Picker
                mode={'dropdown'}
                itemStyle={{
                  height: 50,
                  borderWidth: 2,
                  backgroundColor: '#fff',
                  margin: 8,
                  borderRadius: 10,
                }}
                selectedValue={sexo}
                onValueChange={(value) => guardarSexo(value)}>
                <Picker.Item label="Seleciona Sexo" value="" />
                <Picker.Item label="Hombre" value="H" />
                <Picker.Item label="Mujer" value="M" />
                <Picker.Item label="Personalizado" value="P" />
              </Picker>
            </View>
          </View>
          <View>
            <View>
              <Picker
                mode={'dropdown'}
                itemStyle={{
                  height: 50,
                  borderWidth: 2,
                  backgroundColor: '#fff',
                  margin: 8,
                  borderRadius: 10,
                }}
                selectedValue={cuenta}
                onValueChange={(value) => guardarCuenta(value)}>
                <Picker.Item label="Seleciona Cuenta" value="" />
                <Picker.Item label="Personal" value="P" />
                <Picker.Item label="Empresarial" value="E" />
                <Picker.Item label="Premiun" value="M" />
              </Picker>
            </View>
          </View>
          <Button
            style={styles.button}
            square
            block
            onPress={() => handleSubmit(false)}>
            <Text style={styles.botonText}>Crear cuenta</Text>
          </Button>
          <Button
            style={styles.button}
            square
            block
            onPress={() => handleSubmit(false)}>
            <Text style={styles.botonText}>Regresar</Text>
          </Button>
          {mensaje && mostrarAlerta()}
        </View>
      </ScrollView>
    </Container>
  );
};

export default CrearCuenta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a79d',
  },
  contenido: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFF',
    height: 40,
    marginTop: 30,
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
    marginTop: 15,
  },
  contenedorFecha: {
    height: 35,
  },

  buttonFecha: {
    width: '100%',
    backgroundColor: '#00A79d',
    borderColor: '#FFF',
    borderWidth: 4,
    borderRadius: 6,
    alignContent: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  botonText: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  containerFecha: {
    flex: 1,
    flexDirection: 'row',
    height: 25,
  },
});
