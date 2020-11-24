import React,{useState} from 'react';
import {Button,TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import {useMutation} from '@apollo/client';
import {ADD_COMMENT} from '../gql/comment';
const FeedAddComment = (props) => {
    const {feed}=props;
    const [comment, setComment] = useState('');
    const [addComment]=useMutation(ADD_COMMENT);
    
    
    
    const guardarComentario=async()=>{
       if(comment.length>0){    
       try {
          const {data} = await addComment({
               variables:{
                   input:{
                       idPublication:feed.item.id,
                       comment:comment
                   }
               }
           })
           setComment('');
       } catch (error) {
           console.log(error)
           
       } 
       }
    }

    

    
    
    
    return (
        <Container>
            <Textinput
            placeholder='Añade un comentario...'
            value={comment}
            onChangeText={(texto) => setComment(texto)}
            />
            <TouchableOpacity 
            onPress={()=>guardarComentario()}
            
            >

            
            <Feather
            name="send"
            size={20}
            color='#ffffff'
            />
            </TouchableOpacity>
           
        </Container>
    )
}

export default FeedAddComment;

const Container=styled.View`
bottom:0px;
margin:0px;
flex-direction:row;
align-items:center;
`;
const Textinput = styled.TextInput`
height:35px;
width:85%;
padding:10px;
border:1px solid black;
border-radius:10px;
background-color:#c4e0dd;
margin:10px;
`;

const Text=styled.Text`
 font-size:12px;
`
