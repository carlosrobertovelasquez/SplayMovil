import React from 'react'
import styled from 'styled-components/native';
const FeedImage = (props) => {
    const {feed}=props
    return (
        <>
            <Photo source={{uri:feed.item.file}}/>
        </>
    )
}

export default FeedImage
const Photo=styled.Image`
margin-top:9px;
width:100%;
height:300px;
`;