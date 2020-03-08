import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  grid-area: bottom;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: transparent;
  border: solid 1px white;
`;

const Dots = styled.div``;

export default function Pagination({ onClickPrev, onClickNext }) {
  return (
    <PaginationContainer>
      <Button>&#x3c;</Button>
      <Button>&#62;</Button>
    </PaginationContainer>
  )
}