import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
const FechaCumpleanos = () => {
  return (
    <View>
      <Text>Fecha Nacimiento</Text>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <Picker
          mode={'dropdown'}
          style={{width: 90}}
          accessibilityLabel="Dia"
          itemStyle={{height: 75}}
          onValueChange={dia=>}
          >
          <Picker.Item label="Dia" value="day" />
          <Picker.Item label="01" value="01" />
          <Picker.Item label="02" value="02" />
          <Picker.Item label="03" value="03" />
          <Picker.Item label="04" value="04" />
        </Picker>
        <Picker
          mode={'dropdown'}
          style={{width: 90}}
          accessibilityLabel="Mes"
          itemStyle={{height: 75}}>
          <Picker.Item label="Mes" value="" />
          <Picker.Item label="Ene" value="01" />
          <Picker.Item label="Feb" value="02" />
          <Picker.Item label="Mar" value="03" />
          <Picker.Item label="Abr" value="04" />
        </Picker>
        <Picker
          mode={'dropdown'}
          style={{width: 90, height: 50}}
          itemStyle={{height: 75}}>
          <Picker.Item label="Año" value="" />
          <Picker.Item label="1995" value="1995" />
          <Picker.Item label="1994" value="1994" />
          <Picker.Item label="1993" value="1993" />
          <Picker.Item label="1992" value="1992" />
        </Picker>
      </View>
    </View>
  );
};

export default FechaCumpleanos;
