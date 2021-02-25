import React from 'react'
import { NavList, NavItem, NavLink } from './styled';

const Navigation = () => {
    return (
        <NavList>
            <NavItem><NavLink href="#">Home</NavLink></NavItem>
            <NavItem><NavLink href="#">Video</NavLink></NavItem>
            <NavItem><NavLink href="#">Pricing</NavLink></NavItem>
            <NavItem><NavLink href="#">Contact</NavLink></NavItem>
        </NavList>
    )
}

export default Navigation;
