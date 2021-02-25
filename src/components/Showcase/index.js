import React from 'react';
import video from "../../assets/beta.mp4";
import NavBar from '../NavBar';
import { Overlay, Video, Text, TextBig, TextSmall } from './styled';


const Showcase = () => {
    return (
        <>
        <NavBar />
        <Video src={video} autoPlay muted loop />
        <Overlay />
        <Text>
            <TextBig>Hi, I'm Kacper and I can help you</TextBig>
            <TextSmall>take nice photos.</TextSmall>
        </Text>
       </> 
    )
}

export default Showcase;
