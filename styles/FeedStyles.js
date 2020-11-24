import styled from 'styled-components/native'

export const Container=styled.SafeAreaView`
flex:1;
/*justify-content:center;*/
background-color: #00a79d;
padding:20px;
`;
export const Card =styled.View`
background-color:#00a79d;
width:100%;
margin-bottom:20px;
border-radius:10px;
`;
export const UserInfo =styled.View`
flex-direction:row;
justify-content:flex-start;
`;

export const UserImg = styled.Image`
width:50px;
height:50px;
border-radius:25px;
`;

export const UserInfoText=styled.View`
flex-direction:column;
justify-content:center;
margin-left:10px;
`;

export const UserName=styled.Text`
font-size:14px;
font-weight:bold;
`;
export const PostTime =styled.Text`
font-size:12px;
color:#666;
`