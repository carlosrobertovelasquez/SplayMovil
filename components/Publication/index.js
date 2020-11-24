import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import {InputField,InputWrapper} from '../../styles/AddPost';
import styled from 'styled-components/native';

const index = () => {
    return (
        <Container>
            <InputWrapper>
            <InputField
            placeholder='Que tienes en mente ?'
            multiline
            numberOfLines={4}
            />
            </InputWrapper>
            
        </Container>
    );
}

export default index


const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });


const Container=styled.View`
flex:1;
align-items:center;
justify-content:center;
`;
