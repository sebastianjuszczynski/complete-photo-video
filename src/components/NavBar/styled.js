import styled from "styled-components";

export const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    height: 60px;
    text-transform: uppercase;
    z-index: 1;
    background: ${({location}) => location === '/home' ? "rgba(0,0,0, 0.6)" : "black"};
`;
export const Logo = styled.img`
    margin-left: 100px;
    height: 40px;
`;