import React,{useEffect} from 'react';
import styled from 'styled-components/native';
import {useQuery} from '@apollo/client'
import {COUNT_COMMENTS} from '../gql/comment'
const CommentCount = (props) => {
    const {feed}=props
    const {item}=feed
    const {data,loading,startPolling,stopPolling}=useQuery(COUNT_COMMENTS,{
        variables:{idPublication:item.id}
    })
    
    useEffect(() => {
        startPolling(1000);
        return ()=>{
            stopPolling;
        }
    }, [startPolling,stopPolling])


    if (loading) return null
    const {countComments}=data
    return (
        <>
         <TextCount>{countComments} comentario</TextCount>   
        </>
    )
}

export default CommentCount
const TextCount =styled.Text`
font-size:11px;
color:#424040;
`;