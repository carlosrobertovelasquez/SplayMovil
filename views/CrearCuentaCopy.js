import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useMutation} from '@apollo/client';
import {NEW_ACCOUNT} from '../gql/user';
import RNPickerSelect from 'react-native-picker-select';

import {
  Container,
  Button,
  Text,
  H1,
  Input,
  Form,
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

const CrearCuenta = () => {
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
  //Cuando el usuario presiona en crear cuenta
  const [newUser] = useMutation(NEW_ACCOUNT);
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
    }
    //guardamos el usuario
    const {city, country_name, latitude, longitude, countryCode} = coordenadas;
    try {
      const {data} = await newUser({
        variables: {
          input: {
            name: nombre,
            lastname: apellido,
            email: email,
            password: password,
            gender: sexo,
            birthdayDay: dia,
            birthdayMonth: mes,
            birthdayYear: ano,
            country: country_name,
            city: city,
            latitude: latitude,
            longitude: longitude,
            type: cuenta,
            uidFirebase: '123',
          },
        },
      });
      guardarMensaje('se Creo corretamente');
      navigation.navigate('Login');
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
  const placeholder = {
    label: 'Dia',
    value: null,
    color: '#9EA0A4',
  };
  const placeholderMes = {
    label: 'Mes',
    value: null,
    color: '#9EA0A4',
  };
  const placeholderAno = {
    label: 'Ano',
    value: null,
    color: '#595b61',
  };

  const placeholderSexo = {
    label: 'Selecione su Sexo',
    value: null,
    color: '#595b61',
  };
  const placeholderCuenta = {
    label: 'Selecione su Tipo Cuenta',
    value: null,
    color: '#595b61',
  };
  return (
    <Container style={styles.container}>
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
        <Text>Fecha Nacimiento:</Text>
        <View style={{marginHorizontal: 35}}>
          <Item inlineLabel last>
            <RNPickerSelect
              placeholder={placeholder}
              onValueChange={(value) => guardarDia(value)}
              items={dDia}
              style={pickerSelectStylesF}
            />
            <RNPickerSelect
              placeholder={placeholderMes}
              onValueChange={(value) => guardarMes(value)}
              items={dMes}
              style={pickerSelectStylesF}
            />
            <RNPickerSelect
              placeholder={placeholderAno}
              onValueChange={(value) => guardarAno(value)}
              items={dAno}
              style={pickerSelectStylesF}
            />
          </Item>
        </View>
        <RNPickerSelect
          placeholder={placeholderSexo}
          onValueChange={(value) => guardarSexo(value)}
          items={[
            {label: 'Hombre', value: 'H'},
            {label: 'Mujer', value: 'M'},
            {label: 'Personalizado', value: 'P'},
          ]}
          style={pickerSelectStyles}
        />

        <RNPickerSelect
          placeholder={placeholderCuenta}
          onValueChange={(value) => guardarCuenta(value)}
          items={[
            {label: 'Personal', value: 'P'},
            {label: 'Empresa', value: 'E'},
            {label: 'Premiun', value: 'M'},
          ]}
          style={pickerSelectStyles}
        />

        <Button
          style={styles.button}
          square
          block
          onPress={() => handleSubmit()}>
          <Text style={styles.botonText}>Crear cuenta</Text>
        </Button>
        {mensaje && mostrarAlerta()}
      </View>
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

const pickerSelectStylesF = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    borderWidth: 2,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderColor: '#595b61',
    borderRadius: 4,
    color: 'black',
    paddingRight: 25, // to ensure the text is never behind the icon
    paddingLeft: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: '#595b61',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputFecha: {
    fontSize: 16,
    paddingVertical: 12,
    borderWidth: 2,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderColor: '#595b61',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
});

const dDia = [
  {
    label: '01',
    value: '01',
  },
  {
    label: '02',
    value: '02',
  },
  {
    label: '03',
    value: '03',
  },
];

const dMes = [
  {
    label: 'ene',
    value: '01',
  },
  {
    label: 'feb',
    value: '02',
  },
  {
    label: 'mar',
    value: '03',
  },
  {
    label: 'abr',
    value: '04',
  },
  {
    label: 'may',
    value: '05',
  },
  {
    label: 'jun',
    value: '06',
  },
  {
    label: 'jul',
    value: '07',
  },
  {
    label: 'ago',
    value: '08',
  },
  {
    label: 'sep',
    value: '09',
  },
  {
    label: 'oct',
    value: '10',
  },
  {
    label: 'nov',
    value: '11',
  },
  {
    label: 'dic',
    value: '12',
  },
];

const dAno = [
  {
    label: '1995',
    value: '1995',
  },
  {
    label: '1994',
    value: '1994',
  },
  {
    label: '1993',
    value: '1993',
  },
  {
    label: '1992',
    value: '1992',
  },
  {
    label: '1991',
    value: '1991',
  },
  {
    label: '1990',
    value: '1990',
  },
  {
    label: '1989',
    value: '1989',
  },
  {
    label: '1988',
    value: '1988',
  },
  {
    label: '1987',
    value: '1987',
  },
  {
    label: '1986',
    value: '1986',
  },
  {
    label: '1985',
    value: '1985',
  },
  {
    label: '1984',
    value: '1984',
  },
];
