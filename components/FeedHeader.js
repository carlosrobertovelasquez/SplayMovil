import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Avatar from '../components/Avatar';
import Entypo from 'react-native-vector-icons/Entypo';
import useTime from '../hooks/useTimeAgo'
import useTimeAgo from '../hooks/useTimeAgo';
const FeedHeader = (props) => {
    const {feed}=props;
    const timeago=useTimeAgo(feed.item.createAt);
    const AvatarUri=feed.item.idUser.avatar
    return (

        <>
         <Header>
                    <Row>
                        {AvatarUri !==null ? (<Avatar source={{uri:AvatarUri }}/>):(<Avatar source={require('../assets/icon-avatar-default.png')}/>) }
                        
                        <View style={{paddingLeft:10}}>
                            <User>{feed.item.idUser.name}</User>
                            <Row>
                                <Time>{timeago}</Time>
                            </Row>
                        </View>
                    </Row>
                    <Entypo name='dots-three-horizontal'size={15} color='#222121'/>
                </Header>   
        </>
    )
}

export default FeedHeader

const Header=styled.View`
height:50px;
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

const User=styled.Text`
font-size:12px;
font-weight:bold;
color:#222121;
`;
const Time=styled.Text`
 font-size:9px;
 color:#747476;
`;