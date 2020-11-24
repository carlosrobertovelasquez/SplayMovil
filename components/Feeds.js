import React,{useEffect} from 'react';
import styled from 'styled-components/native';

import {List,ListItem,FlatList,ActivityIndicator,View,ScrollView} from 'react-native';

//Query
import {useQuery} from '@apollo/client' ;
import {GET_PUBLICATIONS_FOLLOWEDS_FRIENDS} from '../gql/publication'
import FeedHeader from './FeedHeader';
import FeedPost from './FeedPost';
import FeedImage from './FeedImage';
import FeedVideo from './FeedVideo';
import FeedFooter from './FeedFooter';
import FeedComment from './FeedComment';
import FeedAddComment from './FeedAddComment';
const Feeds = () => {
    const {data,loading,startPolling,stopPolling}=useQuery(GET_PUBLICATIONS_FOLLOWEDS_FRIENDS);
   
    useEffect(() => {
        startPolling(1000);
        return ()=>{
            stopPolling;
        }
    }, [startPolling,stopPolling])   
    
    if(loading) return( 
    <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
      <ActivityIndicator size="large"/>
    </View>)



const {getPublicationsFollersFriends}=data;
    return (
        <Container>
            <FlatList
                data={getPublicationsFollersFriends}
                renderItem={(feed)=>(
                <>
                    <FeedHeader feed={feed}/>
                    <FeedPost feed={feed} />
                    {feed.item.typeFile==='image'&&(<FeedImage feed={feed}/>)}
                    {feed.item.typeFile==='video'&&(<FeedVideo feed={feed}/>)}
                    <FeedFooter feed={feed}/>
                     <FeedComment feed={feed}/>
                    <FeedAddComment feed={feed}/>      
                    <BottomDivider/>
                </>
                )}
               keyExtractor={feed=>feed.id}
            />

        </Container>            
    
    )
}

export default Feeds

const Container=styled.View`
flex:1;
`;


const BottomDivider=styled.View`
width:100%;
height:9px;
background:#f0f2f5
`;
const Text =styled.Text`
font-size:12px;
color:#424040;
`;