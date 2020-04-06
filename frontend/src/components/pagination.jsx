import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PaginationContainer = styled(motion.div)`
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
  width: 25vw;
  height: 10px;
  background-size: 10px auto;
  @media (max-width:750px) {
    width: 45vw;
  }
`;

export default function Pagination({ onClickPrev, onClickNext, orderID, variants }) {
  return (
    <PaginationContainer custom={orderID} exit="out" animate="in" initial="initial" variants={variants}>
      <Button onClick={onClickPrev} isPrev>&#x3c;</Button>
      <Dots />
      <Button onClick={onClickNext} isNext>&#62;</Button>
    </PaginationContainer>
  )
}