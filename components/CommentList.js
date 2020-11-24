import React from 'react';

import styled from 'styled-components/native';
import useTimeAgo from '../hooks/useTimeAgo';
import Avatar from './Avatar';

const CommentList = (props) => {
    const {getComment}=props;
    const timeago=useTimeAgo(getComment.item.createAt);
    
    return (
        <Container>
            <Row>

            <Avatar source={{uri:getComment.item.idUser.avatar }}/>
                        <View >
                            <User>{getComment.item.idUser.name}</User>
                            
                            <Row>
                            <Text>{getComment.item.comment}</Text>
                               
                            </Row>
                            <Time>{timeago}</Time>    
                        </View>
                        
                        
            </Row>
            
        </Container>
    )
}

export default CommentList;

const View = styled.View`
padding:10px;
border-radius:18px;
border:1px solid #3a3b3c;
margin-left:2px;
margin-right:10px;
text-align:left;
background:#f6f8fa;
margin-bottom:5px;

`;
const Container=styled.View`

flex-direction:row;
align-items:center;
justify-content:space-between;
margin-top:6px;
padding:0 11px;
`;
const Row =styled.View`
align-items:center;
flex-direction:row;
`;
const Text =styled.Text`
font-size:12px;
color:#424040;
`;
const User=styled.Text`
font-size:12px;
font-weight:bold;
color:#222121;
`;
const Time=styled.Text`
 font-size:9px;
 color:#747476;
`;