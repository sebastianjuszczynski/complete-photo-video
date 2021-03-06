import React from 'react';
import { AboutMeContainer, AboutMeDescription, AboutMeH2 } from './styled';
import AnimationScale from '../../animation/AnimationScale';

const AboutMe = () => {

    return (
        <AboutMeContainer>
            <AnimationScale>
            <AboutMeH2>Czym się zajmuję?</AboutMeH2>
            </AnimationScale>
            <AnimationScale>
            <AboutMeDescription>Mam różnorodne umiejętności, od nagrywania i edycji filmów,<br></br> do fotografii i obróbki graficznej.<br></br> Tworzenie jest tym czym zajmuję się na codzień, to moja pasja.<br></br> Zawsze szukam nowych pomysłów i nowych miejsc,<br></br> aby zaspokoić moją wyobraźnię.</AboutMeDescription>
            </AnimationScale>
        </AboutMeContainer>
    )
}

export default AboutMe;
