import React from 'react';
import styled from 'styled-components/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LikeCount from './LikeCount';
import CommentCount from './CommentCount';
import FeedFooterButtonLike from './FeedFooterButtonLike';

const FeedFooter = (props) => {
    const {feed}=props;
    return (
        <>
         <Footer>
                <FooterCount>
                    <Row>
                        <LikeCount feed={feed}/>
                    </Row>
                 <CommentCount feed={feed}/>
                </FooterCount>
        <Separador/>
        <FooterMenu>
        <FeedFooterButtonLike feed={feed}/>
        <Button>
            <Icon>
                <MaterialCommunityIcons
                name='comment-outline'
                size={20}
                color='#424040'
                />
            </Icon>
            <Text>Comentarios</Text>
        </Button>
        <Button>
            <Icon>
                <MaterialCommunityIcons
                name='share-outline'
                size={20}
                color='#424040'
                />
            </Icon>
            <Text>Compartir</Text>
        </Button>
        </FooterMenu>
        <Separador/>
        
    </Footer>    
        </>
    )
}

export default FeedFooter
const Footer =styled.View`
padding:0 11px;
`;
const FooterCount=styled.View`
flex-direction:row;
justify-content:space-between;
padding:9px 0;
`;



const Row =styled.View`
align-items:center;
flex-direction:row;
`;
const Separador =styled.View`
width:100%;
height:1px;
background:#f9f9f9;
`;
const FooterMenu=styled.View`
flex-direction:row;
justify-content:space-between;
padding:9px 0;
`;
const Button =styled.TouchableOpacity`
flex-direction:row;
`;
const Icon =styled.View`
margin-right:6px;
`;
const Text =styled.Text`
font-size:12px;
color:#424040;
`;