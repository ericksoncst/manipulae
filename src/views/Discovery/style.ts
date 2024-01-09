import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    overflow: hidden;
`

export const SongCardWrapper = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    gap: 2rem; 
    justify-content: center; 

    @media (min-width: 640px) { 
    justify-content: flex-start; 
    }
`