import React from 'react';
import {View,ActivityIndicator,ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Avatar from './Avatar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useQuery} from '@apollo/client';
import {GET_USER} from '../gql/user';





const ToolBar = (props) => {
    const {userId}=props
    const {data,loading,error}=useQuery(GET_USER,{
        variables:{id:userId}
    });
    if(loading) return( 
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
          <ActivityIndicator size="large"/>
        </View>)
    const {getUser}=data
    const{avatar}=getUser
    return (
        <>
       <Container>
           <Row>
               <Avatar
               source={{uri:avatar }}
               />
               <Input placeholder='Que estas pensando?'/>
           </Row>
           <Divider/>
           <Row>
               <Menu>
                <Ionicons
                name='ios-videocam'
                size={22}
                color='#F44337'
                />   
                <MenuText>En vivo</MenuText>
               </Menu>
               <Separator/>
               <Menu>
               <MaterialIcons
               name="photo-size-select-actual"
               size={20}
               color='#4caf50'
               />
               <MenuText>Foto</MenuText>
               </Menu>
               <Separator/>
               <Menu>
               <MaterialCommunityIcons
               name="video-plus"
               size={22}
               color='#e141fc'
               />
               <MenuText>Sala</MenuText>
               </Menu>
           </Row>
       </Container>
       <BottomDivider/>
       </>
    )
}

export default ToolBar
const Container =styled.View`
width:100%;
height:92px;

`;
const Row =styled.View`
flex-direction:row;
background: #ffffff;
width:100%;
padding:0 11px;
align-items:center;
`;

const Divider=styled.View`
width:100%;
height:0.5px;
background:#f0f0f0;
`

const Input =styled.TextInput`
height:50px;
width:100%;
padding: 0 8px;
`;
const Menu=styled.View`
flex:1;
flex-direction:row;
align-items:center;
justify-content:center;
height:42px;
`;

const MenuText=styled.Text`
padding-left:11px;
font-weight:500;
font-size:12px;
`
const Separator=styled.View`
width:1px;
height:26px;
background:#F0F0F0
`;

const BottomDivider=styled.View`
width:100%;
height:9px;
background:#f0f2f5
`;