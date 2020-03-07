import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: absolute;
  top: 62px;
  right: 190px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 40px;
`;

const Navlink = styled.a`
  color: white;
  opacity: ${props => props.isActive ? 1 : .5};
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