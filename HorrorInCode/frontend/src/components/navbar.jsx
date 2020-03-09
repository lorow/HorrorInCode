import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 15vw;
  display: grid;
  z-index: 90;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

const Navlink = styled.a`
  color: white;
  font-size: 20px;
  text-align: center;
  opacity: ${props => props.isActive ? 1 : .5};

  transition: .2s all;
  &:hover{
    transform: translateY(-3px);
  }
`;

export default function Navbar(props) {
  return (
    <NavbarContainer>
      <Navlink isActive>Works</Navlink>
      <Navlink>About</Navlink>
      <Navlink>Blog</Navlink>
      <Navlink>Resume</Navlink>
    </NavbarContainer>
  )
}