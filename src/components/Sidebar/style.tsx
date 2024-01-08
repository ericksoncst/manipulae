import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

export const LogoWrapper = styled.div`
    display: none; 
    padding-left: 1rem;
    padding-right: 1rem; 
    padding-bottom: 2.5rem; 
    flex-direction: column; 
    width: 240px;

    @media (min-width: 768px) { 
        display: flex; 
    }
`

export const LogoImage = styled(Image)`
    width: 100%;
    object-fit: contain; 
    height: 10rem; 
`

export const StyledLink = styled(Link)`
    display: flex; 
    margin-top: 2rem;
    margin-bottom: 2rem; 
    margin-left: 2rem;
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: center; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
    font-weight: 500; 
    color: #9CA3AF; 
`

export const NavWrapper = styled.div`
    margin-top: 2.5rem; 
`

export const Menu = styled.div`
    display: block; 
    position: absolute; 
    right: 0.75rem; 
    top: 1.5rem; 


    @media (min-width: 768px) { 
    display: none; 
    }
`

export const StyledHiOutlineMenu = styled(HiOutlineMenu)`
    margin-right: 0.5rem; 
    width: 1.5rem; 
    height: 1.5rem; 
    color: #cecece; 
`

export const StyledRiCloseLine = styled(RiCloseLine)`
    margin-right: 0.5rem; 
    width: 1.5rem; 
    height: 1.5rem; 
    color: #cecece; 

`

export const MenuMobile = styled.div<{isOpened: boolean}>`
    position: absolute; 
    top: 0; 
    left: ${({isOpened}) => isOpened ? '0' : '100%'};
    z-index: 10; 
    padding: 1.5rem; 
    width: 66.666667%; 
    height: 100vh; 
    background-image: background-image: linear-gradient(to top left, var(--tw-gradient-stops)); 
    backdrop-blur: blur(16px); 


    @media (min-width: 768px) { 
    display: none; 
    }

`