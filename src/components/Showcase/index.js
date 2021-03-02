import React from 'react';
import video from "../../assets/beta.mp4";
import NavBar from '../NavBar';
import { Overlay, Video, Text, TextBig, TextSmall, ArrowDown, Arrow, Container } from './styled';
import Typewriter from 'typewriter-effect';
const Showcase = () => {


    return (
        <Container>
            <NavBar />
            <Video src={video} autoPlay muted loop />
            <Overlay />
            <Text>
                <TextBig>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Hi, I'm Kacper and I can help you")
                                .pauseFor(2500)
                                .start();
                        }}
                    />
                </TextBig>
                <TextSmall>
                    <Typewriter
                          options={{
                            loop: true,
                          }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(4500)
                                .typeString("take nice photos.")
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString("create a beautiful logo.")
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString("make a cool video.")
                                .pauseFor(2500)
                                .deleteAll()
                                .start();
                        }}
                    />
                </TextSmall>

            </Text>
            <ArrowDown class="arrow bounce">
                <Arrow href="#"><i class="fas fa-chevron-down"></i></Arrow>
            </ArrowDown>

        </Container>
    )
}

export default Showcase;
