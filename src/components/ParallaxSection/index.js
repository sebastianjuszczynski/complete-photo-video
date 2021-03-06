import React from 'react';
import { Parallax } from 'react-parallax';
import AnimationFromLeft from '../../animation/AnimationFromLeft';
import photographer from "../../assets/photographer.jpg"
import { ParallaxContainer, TextContainer, TextH3, TextParagraph } from './styled';


const ParallaxSection = () => {
    return (
        <ParallaxContainer>
            <Parallax bgImage={photographer} bgImageAlt="photographer" strength={150}
            style={{position: "relative"}}
            bgImageStyle={{zIndex: "-1"}}
            >
                <TextContainer style={{ height: 400 }}>
                    <AnimationFromLeft>
                    <TextH3>Troszeczkę o mnie</TextH3>
                    <TextParagraph>Moją główną inspiracją do tworzenia filmów i robienia zdjęć są podróże.<br></br> Urodziłem się w Polsce, ale zwiedziłem wiele zakątków świata.<br></br> Obecnie mieszkam w Milton Keynes - mieście, które ciągle jest w ruchu,<br></br> tak jak ja. </TextParagraph>
                    </AnimationFromLeft>
                </TextContainer>
            </Parallax>
        </ParallaxContainer>
    )
}

export default ParallaxSection;
