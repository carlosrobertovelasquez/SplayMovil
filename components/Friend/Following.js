import React ,{useEffect,useState} from 'react';
import { Button, View,ScrollView,FlatList,List,ListItem,ActivityIndicator,Alert} from 'react-native';
import {useQuery,useMutation} from '@apollo/client';
import {GET_FRIENDS,FRIEND} from '../../gql/friend';

import styled from 'styled-components/native';
import Avatar from '../Avatar';
import Feather from 'react-native-vector-icons/Feather';

const Following = () => {
    const [friend] =useMutation(FRIEND);
    
    
    /*
    const {data,loading,refetch,startPolling,stopPolling} =useQuery(GET_FRIENDS)

    useEffect(() => {
        startPolling(1000);
        return ()=>{
            stopPolling;
        }
    }, [startPolling,stopPolling])

   
    if(loading) return 
    ( 
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
          <ActivityIndicator size="large"/>
        </View>
    )
    
    console.log(data)
//    const {getFriends}=data;
//    console.log(getFriends);
*/    
    return (
        <Container>
            <Text>Desde Sigueindo aquiiiiii</Text>
        </Container>
    )
}

export default Following;

const Container=styled.View`
text-align:center
justify-content:center;
`;

const Text=styled.Text`
font-size:12px;
`;