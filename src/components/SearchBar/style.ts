import styled from "styled-components";
import { FiSearch } from 'react-icons/fi';


export const Form = styled.form`
    padding: 0.5rem; 
    color: #F4ECF7; 
    border: 1px solid #F4ECF7;
`

export const Label = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0; 
`

export const InputWrapper = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: center; 
`

export const SearchIcon = styled(FiSearch)`
    margin-left: 1rem; 
    width: 1.25rem; 
    height: 1.25rem; 
`

export const SearchInput = styled.input`
    padding: 1rem; 
    flex: 1 1 0%; 
    border-style: none; 
    outline-style: none; 
    font-size: 1rem;
    line-height: 1.5rem; 
    color: #000; 
    background-color: transparent; 

`