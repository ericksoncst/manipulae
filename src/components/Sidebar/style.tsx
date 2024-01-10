import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { AiFillHome } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

export const Container = styled.div`
    height: 100vh;
`

export const LogoWrapper = styled.div`
    display: none; 
    padding-left: 1rem;
    padding-right: 1rem; 
    flex-direction: column; 
    width: 220px;

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
    margin-bottom: 2rem; 
    margin-left: 2rem;
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: center; 
    font-size: 18px;
    font-weight: 700; 
    color: #000; 
    text-decoration: none;
    letter-spacing: 1px;
`

export const NavWrapper = styled.div`
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

export const StyledAiFillHome = styled(AiFillHome)`
    margin-right: 0.5rem; 
    width: 1.5rem; 
    height: 1.5rem; 
    color: #000; 
`


export const StyledRiCloseLine = styled(RiCloseLine)`
    margin-right: 0.5rem; 
    width: 1.5rem; 
    height: 1.5rem; 
    color: #000; 

`

export const StyledHiOutlineMenu = styled(HiOutlineMenu)`
    margin-right: 0.5rem; 
    width: 1.5rem; 
    height: 1.5rem; 
    color: #000; 
`


export const StyledFaHeart = styled(FaHeart)`
    margin-right: 0.5rem; 
    width: 1.5rem; 
    height: 1.5rem; 
    color: #000; 
`

export const MenuMobile = styled.div<{isOpened: boolean}>`
    position: absolute; 
    top: 0; 
    left: ${({isOpened}) => isOpened ? '0' : '100%'};
    z-index: 10; 
    padding: 1.5rem; 
    width: 66.666667%; 
    height: 100vh; 
    backdrop-blur: blur(16px); 
    background-color: #E6BDF5;



    @media (min-width: 768px) { 
        display: none; 
    }

`