import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  grid-area: bottom;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  color: white;
  background-color: transparent;
  border: solid 1px white;
  margin-left: ${props => props.isNext ? "5px" : "0"};
  margin-right: ${props => props.isPrev ? "11px" : "0"};
`;

const Dots = styled.div`
  background-image: url('/svg/dot.svg');
  background-repeat: space;
  width: 20vw;
  height: 10px;
  background-size: 10px auto;
`;

export default function Pagination({ onClickPrev, onClickNext }) {
  return (
    <PaginationContainer>
      <Button onClick={onClickPrev} isPrev>&#x3c;</Button>
      <Dots />
      <Button onClick={onClickNext} isNext>&#62;</Button>
    </PaginationContainer>
  )
}