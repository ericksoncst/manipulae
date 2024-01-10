import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    padding: 1rem; 
    flex-direction: column; 
    border-radius: 0.5rem; 
    --bg-opacity: 0.8; 
    cursor: pointer; 
    backdrop-blur: blur(4px); 
    width: 250px;

`

export const PlayPauseWrapper = styled.div`
    position: relative; 
    width: 100%; 
    height: 14rem; 
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
    letter-spacing: 1px;
`

export const SongTitle = styled.span`
    font-size: 12px;
    color: #A9A9A9; 
    overflow: hidden;
    white-space: nowrap; 
`

export const StyledFaHeart = styled(FaHeart).attrs(({ color }) => ({
    color:  color || "#CECECE"
  }))`
    margin-right: 0.5rem; 
    width: 1.5rem; 
    height: 1.5rem; 
`