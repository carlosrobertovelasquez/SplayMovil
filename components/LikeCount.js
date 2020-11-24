import React,{useEffect} from 'react'
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useQuery} from '@apollo/client';
import {COUNT_LIKES,IS_LIKE} from '../gql/like';
const LikeCount = (props) => {
    const {feed}=props;
    const {item}=feed;
    const {data,loading,startPolling,stopPolling}=useQuery(COUNT_LIKES,{
        variables:{idPublication:item.id}
    });
    
    useEffect(() => {
        startPolling(1000);
        return ()=>{
            stopPolling;
        }
    }, [startPolling,stopPolling]);
    if(loading) return null;
    const {countLikes} = data;
    return (
        <>
         <IconCount>
                            <AntDesign 
                                name='like1'
                                size={12}
                                color='#ffffff'/>
                        </IconCount>
                        <TextCount>
                            {countLikes} 
                        </TextCount>   
        </>
    )
}

export default LikeCount

const IconCount =styled.View`
  background:#1878f3;
  width:20px;
  height:20px;
  border-radius:10px;
  align-items:center;
  justify-content:center;
  margin-right:6px;
`;

const TextCount =styled.Text`
font-size:11px;
color:#424040;
`;