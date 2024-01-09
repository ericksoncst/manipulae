import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex; 
    position: fixed;
    right: 0; 
    bottom: 0; 
    left: 0; 
    z-index: 2; 
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem; 
    height: 7rem; 
    backdrop-blur: blur(16px); 
    background-color: #F4ECF7;
`

export const ContentContainer = styled.div`
    display: flex; 
    position: relative; 
    padding-left: 2rem;
    padding-right: 2rem; 
    justify-content: space-between; 
    align-items: center; 
    width: 100%; 

    @media (min-width: 640px) { 
    padding-left: 3rem;
    padding-right: 3rem; 
    }
`

export const ControllsContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    flex: 1 1 0%; 
    justify-content: center; 
    align-items: center; 
`
