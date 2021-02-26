import React from 'react'
import Navigation from '../Navigation';
import { NavigationContainer, Logo } from "./styled";
import LogoImg from "../../assets/logo.png"

const NavBar = () => {
    return (
        <NavigationContainer>
            <Logo src={LogoImg}></Logo>
            <Navigation />
        </NavigationContainer>
    )
}

export default NavBar;
