import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: white;
    padding: 10px 10px 3px 10px;
    &.${activeClassName} {
        font-weight: bold;
    }
    &:hover {
    transition: 0.5s;
    filter: brightness(0.8);
  }
`;
export const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin-right: 100px;
`;
export const NavItem = styled.li`
    padding: 0 5px;
`;
