import styled from "styled-components";

export const Container = styled.div`
    display: none; 
    flex: 1 1 0%; 
    justify-content: flex-end; 
    align-items: center; 



    @media (min-width: 1024px) { 
    display: flex; 
    }
`

export const Input = styled.input`
    margin-left: 0.5rem; 
    height: 0.25rem; 


    @media (min-width: 768px) { 
    width: 8rem; 
    }
    @media (min-width: 1024px) { 
    width: 8rem; 
    }

    @media (min-width: 1536px) { 
    }
`