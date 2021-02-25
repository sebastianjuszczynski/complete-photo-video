import React from 'react'
import Navigation from '../Navigation';
import { NavigationContainer, Logo} from "./styled";

const NavBar = () => {
    return (
        <NavigationContainer>
            <Logo>Complete photo video</Logo>
            <Navigation />
        </NavigationContainer>
    )
}

export default NavBar;
