import React from 'react'
import AnimationFromRight from '../../animation/AnimationFromRight';
import { FormH3, FormSpan } from './styled';

const FormHeader = () => {
    return (
        <AnimationFromRight>
        <FormH3>Skontaktuj się <FormSpan>ze mną</FormSpan> i sprawdź<br />co możemy zrobić <FormSpan>razem!</FormSpan></FormH3>
        </AnimationFromRight>
    )
}

export default FormHeader;
