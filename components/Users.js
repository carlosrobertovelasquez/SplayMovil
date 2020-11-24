import React from 'react'
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import Avatar from '../components/Avatar';
const Container=styled.View`
width:100%;
height:58px;
flex-direction:row;
align-items:center;
`;
const Room=styled.TouchableOpacity`
width:115px;
height:40px;
flex-direction:row;
align-items:center;
border-radius:20px;
border-width:1px;
border-color:#82b1ff;
padding:0 15px;
margin-right:12px;
`;
const User =styled.View`
margin-right:13px;
`;
const BottomDivider=styled.View`
width:100%;
height:9px;
background:#f0f2f5
`;
const Users = () => {
    return (
        <>
        <Container>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator
            style={{paddingLeft:11}}
            >
            <User>
                <Avatar
                source={require('../assets/e2d418af-becd-4794-9423-8ff1be542177.jpeg')}
                online={true}
                />
            </User>
            <User>
                <Avatar
                source={require('../assets/e2d418af-becd-4794-9423-8ff1be542177.jpeg')}
                online={true}
                />
            </User>
            <User>
                <Avatar
                source={require('../assets/e2d418af-becd-4794-9423-8ff1be542177.jpeg')}
                online={true}
                />
            </User>
            <User>
                <Avatar
                source={require('../assets/e2d418af-becd-4794-9423-8ff1be542177.jpeg')}
                online={true}
                />
            </User>
            <User>
                <Avatar
                source={require('../assets/e2d418af-becd-4794-9423-8ff1be542177.jpeg')}
                online={true}
                />
            </User>
            <User>
                <Avatar
                source={require('../assets/e2d418af-becd-4794-9423-8ff1be542177.jpeg')}
                online={true}
                />
            </User>
            <User>
                <Avatar
                source={require('../assets/e2d418af-becd-4794-9423-8ff1be542177.jpeg')}
                online={true}
                />
            </User>
            <User>
                <Avatar
                source={require('../assets/e2d418af-becd-4794-9423-8ff1be542177.jpeg')}
                online={true}
                />
            </User>
            <User>
                <Avatar
                source={require('../assets/e2d418af-becd-4794-9423-8ff1be542177.jpeg')}
                online={true}
                />
            </User>
            <User>
                <Avatar
                source={require('../assets/e2d418af-becd-4794-9423-8ff1be542177.jpeg')}
                online={true}
                />
            </User>
            </ScrollView>
        </Container>
        <BottomDivider/>
        </>
    )
}

export default Users
