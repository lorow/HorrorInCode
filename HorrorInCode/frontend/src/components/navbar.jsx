import React, { useState, useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { routes } from '../routes';


const HamburgerButton = styled.button`
  position: fixed;
  top: 5vw;
  right: 8vw;
  z-index: 90;
  display: none;

  width: 30px;
  height: 20px;
  border: none;

  background: url("/svg/menu.svg");
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseHamburgerMenu = styled.button`
  background-color: transparent;

  width: 30px;

  margin-left: auto;
  margin-right: 30px;

  border: none;
  color: white;
  font-size: 20px;
  font-weight: 700;
  display: none;

  @media (max-width: 650px) {
    display: block;
  }
`;

const NavbarContainer = styled.div`
  position: fixed;
  top: 50px;
  right: 15vw;
  display: grid;
  z-index: 90;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 10px;

  @media (max-width: 768px) {
    background: linear-gradient(240.48deg, #091430 0.20%, rgba(9, 20, 48, 0.90) 100%);
    display: ${props => props.shouldMenuDisplay ? "grid" : "none"};
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-template-rows: .3fr repeat(4, .3fr) 1fr;
    justify-content: center;
    align-items: center;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

  }
`;

const commonLinkStyle = css`
  color: white;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  opacity: ${props => props.isActive ? 1 : .5};

  transition: .2s all;
  &:hover{
    transform: translateY(-3px);
  }
  
  &:active{
    opacity: .8;
  }`;

const Navlink = styled.a`
  ${commonLinkStyle}
`;

const RouterNavLink = styled(Link)`
  ${commonLinkStyle}
`;

function Navbar(props) {
  const [shouldMenuOpen, setShouldMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setShouldMenuOpen(prev => !prev);
  }, [])


  return (
    <>
      <HamburgerButton onClick={toggleMenu}></HamburgerButton>
      <NavbarContainer shouldMenuDisplay={shouldMenuOpen}>
        <CloseHamburgerMenu onClick={toggleMenu}>X</CloseHamburgerMenu>
        {
          routes.map(({ path, name }) => (
            <RouterNavLink
              exac path={path}
              key={path + name}
              isActive={props.location.pathname === path}
            >
              {name}
            </RouterNavLink>
          ))
        }
        <Navlink href="/Zdzislaw_Goik_CV.pdf" download="zdzislaw_goik_cv" >Resume</Navlink>
      </NavbarContainer>
    </>
  )
}

export default withRouter(Navbar);