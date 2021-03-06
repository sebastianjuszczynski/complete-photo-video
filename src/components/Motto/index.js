import { motion } from 'framer-motion';
import React from 'react'
import { Text } from './styled';
import AnimationScale from '../../animation/AnimationScale';


const Motto = () => {
    return (
        <AnimationScale>
        <Text>
            Obraz jest tak samo ważny jak tysiąc<br></br> słów, więc sprawdź kilka moich <br></br>projektów.
        </Text>
        </AnimationScale>
    )
}

export default Motto
