import React from 'react';
import styled from 'styled-components/native';
const FeedPost = (props) => {
    const {feed}=props
    return (
        <>
         <Post>{feed.item.comments}</Post>   
        </>
    )
}

export default FeedPost
const Post =styled.Text`
font-size:12px;
color:#222121;
line-height:16px;
padding:0 11px;
`;