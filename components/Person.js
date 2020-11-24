import React,{useEffect} from 'react';
import {ScrollView} from 'react-native'

import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Person = (props) => {
    return (
        <>
        <MenuText>Personas que quiza conozcas</MenuText>
        <Container>
            
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft:11}}
            >
            <Card>              
            <CardPerson
             source={require('../assets/16e3dc74-6503-4d98-9365-ef31bead3056.jpeg')}
            />
            <CardUser>
            <AntDesign
            name='plus'
            size={24}
            color='#1777f2'
            />

            </CardUser>
            <CardFooter>
                <Text>Agregar</Text>
            </CardFooter>
            </Card>
            <Card>
            <CardPerson
             source={require('../assets/727c7668-34cd-4352-8aae-4b574e534bbb.jpeg')}
            />
            <CardUser>
            <AntDesign
            name='plus'
            size={24}
            color='#1777f2'
            />

            </CardUser>
            <CardFooter>
                <Text>Agregar</Text>
            </CardFooter>
            </Card>
            <Card>
            <CardPerson
             source={require('../assets/77d92a71-199a-425a-a0de-47970ea299c7.jpeg')}
            />
            <CardUser>
            <AntDesign
            name='plus'
            size={24}
            color='#1777f2'
            />

            </CardUser>
            <CardFooter>
                <Text>Agregar</Text>
            </CardFooter>
            </Card>
            <Card>
            <CardPerson
             source={require('../assets/906e1ee5-0e55-4013-8e32-e6da4090d73d.jpeg')}
            />
            <CardUser>
            <AntDesign
            name='plus'
            size={24}
            color='#1777f2'
            />

            </CardUser>
            <CardFooter>
                <Text>Agregar</Text>
            </CardFooter>
            </Card>
            <Card>
            <CardPerson
             source={require('../assets/ed1a4a11-2d0c-4e85-8be8-35e101741fe8.jpeg')}
            />
            <CardUser>
            <AntDesign
            name='plus'
            size={24}
            color='#1777f2'
            />

            </CardUser>
            <CardFooter>
                <Text>Agregar</Text>
            </CardFooter>
            </Card>
            </ScrollView>
        </Container>
        <BottomDivider/>
        </>
    )
}

export default Person
const Container =styled.View`
width:100%;
height:192px;
flex-direction:row;
align-items:center;
`;
const Card =styled.View`
width:106px;
height:170px;
position:relative;
margin-right:8px;
`;
const CardPerson =styled.Image`
width:100%;
height:170px;
border-radius:12px;
`;
const CardUser=styled.View`
position:absolute;
top:8px;
left:8px;
background:#ffffff;
border-radius:20px;
width:39px;
height:39px;
align-items:center;
justify-content:center;
`;
const MenuText=styled.Text`
padding:11px;
font-weight:500;
font-size:12px;
height:25px;
align-items:center;
justify-content:center;
`;
const CardFooter=styled.Text`
width:100%;
position:absolute;
bottom:12px;
left:9px;
`;
const Text = styled.Text`
font-size:13px;
font-weight:bold;
color:#FFFFFF;
text-shadow: 1px 1px 1px rgba(0,0,0,0.4);
`;
const BottomDivider=styled.View`
width:100%;
height:9px;
background:#f0f2f5
`;