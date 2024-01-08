import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    padding: 1rem; 
    flex-direction: column; 
    border-radius: 0.5rem; 
    --bg-opacity: 0.8; 
    cursor: pointer; 
    backdrop-blur: blur(4px); 
    width: 180px;

`

export const PlayPauseWrapper = styled.div`
    position: relative; 
    width: 100%; 
    height: 12rem; 
`

//TODO: change Style
export const PlayPauseContainer = styled.div`
position: absolute; 
padding: 5px;
top: 0;
right: 0;
bottom: 0;
left: 0; 
justify-content: center; 
align-items: center; 
--bg-opacity: 0.5; 



:hover {
 display: flex; 
 }
`

export const AlbumCover = styled.img`
    padding: 2px;
    border-radius: 0.5rem; 
    width: 100%; 
    height: 100%; 
`

export const InfoContainer = styled.div`
    display: flex; 
    margin-top: 1rem; 
    flex-direction: column; 
`

export const ArtitsName = styled.span`
    font-size: 14pxs;
    line-height: 1.75rem; 
    font-weight: 600; 
    color: #000; 
    overflow: hidden;
    white-space: nowrap; 
`

export const SongTitle = styled.span`
    font-size: 12px;
    font-weight: 600; 
    color: #000; 
    overflow: hidden;
    white-space: nowrap; 
`