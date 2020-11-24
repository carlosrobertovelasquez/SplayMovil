import React from 'react'
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

const Container = styled.View`
width:100%;
height:58px;
padding:0 11px;
align-items:center;
flex-direction:row;
justify-content:space-between;
background:#00a79d;

`
const Row=styled.View`
flex-direction:row
`;
const Button=styled.TouchableOpacity`
width:42px;
height:42px;
align-items:center;
border-radius:21px;
background:#eeeeee;
justify-content:center;
margin-left:16px;
`;

const Text=styled.Text`
color:#ffffff;
font-size:25px;
font-weight:bold;
letter-spacing:-0.3px;
`
const AppBar = () => {
  
    return (
        <Container>
            <Text>Splay7</Text>
            <Row>
            <Button>
                <Feather name='plus' size={29} color='black'/>      
            </Button>
            </Row>
            </Container>
    )
}

export default AppBar;
