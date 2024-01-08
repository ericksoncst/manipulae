import React , { useState } from 'react';


import * as S from './style';
import logo from '../../assets/deezer.svg'

const Sidebar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <S.LogoWrapper>
      <S.LogoImage src={logo} alt='logo' priority />
      <S.NavWrapper>
       <S.StyledLink href={'/'} >
        <S.StyledAiFillHome />
        Início</S.StyledLink>
       <S.StyledLink href={'/favorites'} >
       <S.StyledFaHeart />
        Favoritos</S.StyledLink>
      </S.NavWrapper>
      </S.LogoWrapper>
      <S.Menu>
        {!mobileMenuOpen ? <><S.StyledHiOutlineMenu onClick={() => setMobileMenuOpen(true)} /> </>: 
        <><S.StyledRiCloseLine onClick={() => setMobileMenuOpen(false)} /> </>}
      </S.Menu>
      <S.MenuMobile isOpened={mobileMenuOpen}>
        <S.LogoImage src={logo} alt='logo' priority />
        <S.StyledLink href={'/'} >
        <S.StyledAiFillHome />
          Início</S.StyledLink>
        <S.StyledLink href={'/favorites'} onClick={() => setMobileMenuOpen(false)} >
        <S.StyledAiFillHome />
          Favoritos</S.StyledLink>
      </S.MenuMobile>
      </>
  );
};

export default Sidebar;