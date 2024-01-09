import Image from "next/image";
import styled from "styled-components";

export const TrackWrapper = styled.div`
    display: flex; 
    flex: 1 1 0%; 
    justify-content: flex-start; 
    align-items: center; 
`

//TODO: animation
export const ActiveSong = styled.div<{isActive: boolean, isPlaying: boolean}>`
    margin-right: 1rem; 
    width: 4rem; 
    height: 4rem; 

    @media (min-width: 640px) { 
    display: block; 
    }
`

export const ActiveSongCover = styled.img`
    border-radius: 50px;  
    width: 60px;
    height: 60px;
`

export const SongTitleContainer = styled.div`
    width: 50%;
`

export const SongTitle = styled.span`
    font-size: 14px;
    line-height: 1.75rem; 
    font-weight: 700; 
    color: #000; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
`