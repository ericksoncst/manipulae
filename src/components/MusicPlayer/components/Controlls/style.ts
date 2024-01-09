import styled from "styled-components";
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';


export const Container = styled.div`
    display: flex; 
    justify-content: space-around; 
    align-items: center; 


    @media (min-width: 768px) { 
    width: 9rem; 
    }
    @media (min-width: 1024px) { 
    width: 13rem; 
    }

    @media (min-width: 1536px) { 
    }
`

export const ArrowRepeat = styled(BsArrowRepeat)`
    display: none; 
    cursor: pointer; 

    @media (min-width: 640px) { 
    display: block; 
    }

`

export const PreviousSong = styled(MdSkipPrevious)`
    cursor: pointer; 
`

export const PauseSong = styled(BsFillPauseFill)`
    cursor: pointer; 
`

export const PlaySong = styled(BsFillPlayFill)`
    cursor: pointer; 
`

export const NextSong = styled(MdSkipNext)`
    cursor: pointer; 
`

export const Shuffle = styled(BsShuffle)`
    display: none; 
    cursor: pointer; 

    @media (min-width: 640px) { 
    display: block; 
    }
`