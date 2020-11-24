import React from 'react'
import styled from 'styled-components/native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
const FeedVideo = (props) => {
    const {feed}=props;
    return (
        <>
         <VideoPlayer
                    controls
                    paused
                    source={{uri:feed.item.file}}
                    style={{flex:1,marginTop:9,
                    width:'100%',
                    height:300}}
                />   
        </>
    )
}

export default FeedVideo
