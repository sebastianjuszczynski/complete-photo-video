import React from 'react'
import Navigation from '../Navigation';
import { withRouter } from "react-router-dom";
import { NavigationContainer, Logo } from "./styled";
import LogoImg from "../../assets/logo.png"

const NavBar = (props) => {
    return (
        <NavigationContainer location={props.location.pathname}>
            {console.log(props)}
            <Logo src={LogoImg}></Logo>
            <Navigation />
        </NavigationContainer>
    )
}

export default withRouter(NavBar);
