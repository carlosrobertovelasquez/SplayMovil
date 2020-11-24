import React ,{useEffect,useState} from 'react';
import { Button, View,ScrollView,FlatList,List,ListItem,ActivityIndicator,Alert} from 'react-native';
import {useQuery,useMutation} from '@apollo/client';
import {GET_NOTFRIEND,FRIEND} from '../../gql/friend';
import styled from 'styled-components/native';
import Avatar from '../Avatar';
import Feather from 'react-native-vector-icons/Feather';


const Follw = () => {
    const [friend] =useMutation(FRIEND);
    const {data,loading,refetch,startPolling,stopPolling} =useQuery(GET_NOTFRIEND)
    
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
    const {getNotFriends}=data;
    
    

const AgregarAmigo=async(id)=>{
    try {
        await friend({
            variables:{
                id:id
            }
        })
        refetch(); 
     Alert.alert('Siguiendo','Button',[{text:'OK'}]);
    } catch (error) {
        console.log(error)
    }
};


    return (
        <>
        <Button
        title='Ver mis amigos'
        onPress={()=>navigation.navigate('Siguiendo')}
        />
       <FlatList
           data={getNotFriends}
           renderItem={(notFriends)=>(
            <>                
           <Container>
           <Row>   
           
           
                   {notFriends.item.avatar !==null ? 
                   (<Avatar source={{uri:notFriends.item.avatar }}/>):
                   (<Avatar source={require('../../assets/icon-avatar-default.png')}/>)}
                   
               <View>
                  
                   
                   <User>{notFriends.item.name}</User>
                   <Time>{notFriends.item.lastname}</Time>
               </View>
           </Row>       
                  <ButtonStyled
                  onPress={()=>AgregarAmigo(notFriends.item.id)}
                  >
                       <Feather name='plus' 
                       size={29} 
                       color='black'
                       
                       />      
                   </ButtonStyled>
                   
           </Container>
          <View style={{height:1,width:"86%",backgroundColor:'black',marginLeft:"14%"}}/>                
            </> 
       )}
       keyExtractor={notFriends=>notFriends.id}
       />
      </>
    )
}

export default Follw;

const Container=styled.View`
width:100%;
height:58px;
padding:0 11px;
align-items:center;
flex-direction:row;
justify-content:space-between;

`;

const Row=styled.View`
flex-direction:row
`;
const RowButon=styled.View`
justify-content:left;
`

const Text=styled.Text`
font-size:12;
font-weight:bold;
`
const User=styled.Text`
font-size:12px;
margin-left:10px;
font-weight:bold;
color:#222121;
`;
const Time=styled.Text`
 font-size:9px;
 margin-left:10px;
 color:#747476;
`;

const ButtonStyled=styled.TouchableOpacity`
width:42px;
height:42px;
align-items:center;
border-radius:21px;
background:#eeeeee;
justify-content:center;
margin-left:16px;
`;