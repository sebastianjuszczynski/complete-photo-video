import React from 'react';
import { toHome, toVideo, toPricing, toContact } from "../../routes";
import { NavList, NavItem, StyledNavLink } from './styled';

const Navigation = () => {
    return (
        <NavList>
            <NavItem><StyledNavLink to={toHome()}>Home</StyledNavLink></NavItem>
            <NavItem><StyledNavLink to={toVideo()}>Video</StyledNavLink></NavItem>
            <NavItem><StyledNavLink to={toPricing()}>Pricing</StyledNavLink></NavItem>
            <NavItem><StyledNavLink to={toContact()}>Contact</StyledNavLink></NavItem>
        </NavList>
    )
}

export default Navigation;
