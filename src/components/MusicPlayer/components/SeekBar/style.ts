import styled from "styled-components";

export const Container = styled.div`
    display: none; 
    flex-direction: row; 
    align-items: center; 

    @media (min-width: 640px) { 
    display: flex; 
    }

`

export const Less = styled.button`
    display: none; 
    color: #000; 



    @media (min-width: 1024px) { 
    display: block; 
    margin-right: 1rem; 
    }


`

export const Pluss = styled.button`
    display: none; 
    color: #000; 



    @media (min-width: 1024px) { 
    display: block; 
    margin-left: 1rem; 
    }
`

export const Text = styled.p`
    color: #000; 
`

export const Input = styled.input`
    margin-left: 1rem;
    margin-right: 1rem; 
    border-radius: 0.5rem; 
    width: 6rem; 
    height: 0.25rem; 


    @media (min-width: 768px) { 
    display: block; 
    width: 14rem; 
    }


    @media (min-width: 1536px) { 
    }

`