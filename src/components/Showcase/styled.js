import styled from "styled-components";

export const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #03a9f4;
    mix-blend-mode: overlay;
`;
export const Text = styled.div`
    position: absolute;
    top: 45%;
    left: 0;
    padding: 10px;
    color: white;
    margin-left: 100px;
`;
export const TextBig = styled.h2`
    font-size: 3em;
`;
export const TextSmall = styled.h3`
   font-size: 2em; 
`;