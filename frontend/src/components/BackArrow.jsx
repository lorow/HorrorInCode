import styled from 'styled-components';
import React from 'react';
import { history } from '../history';

const BackArrowButton = styled.button`
  margin-left: auto;
  margin-right: ${props => props.shouldAutoCenter ? "auto" : "60px"};
  margin-left: ${props => props.shouldAutoCenter ? "auto" : "initial"}
  z-index: 5;
  background-image: url('/static/svg/BackArrow.svg');
  background-repeat: no-repeat;
  width: 40px;
  line-height: 40px;
  border: none;
  background-size: 100%;
  background-position: center;
  background-color: transparent;

  transition: all .2s;
  &:hover{
    transform: translateX(5px)
  }

  @media(max-width: 621px){
    display: none;
  }

  grid-area: ${props => props.gridPosition};
`;

export default function BackArrow(props) {
  return (
    <BackArrowButton gridPosition={props.gridPosition} shouldAutoCenter={props.shouldAutoCenter} onClick={() => history.goBack()} />
  )
}
