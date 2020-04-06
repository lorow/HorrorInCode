import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const CounterContainer = styled.div`
  position: fixed;
  display: grid;
  
  grid-auto-flow: column;
  grid-gap: 5px;
  grid-template-columns: 1fr;
  grid-template-rows: .3fr .7fr;

  left: 10%;
  bottom: 0;
  width: 60px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Spike = styled.div`
  width: 3px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255,255,255, 0.6);
`;

const NumberDisplay = styled.p`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: rgba(255,255,255,0.6);
`;

export default function Counter({ pageNumber }) {
  const fadeNumberControl = useAnimation();

  const [currentNumber, setCurrentNumber] = useState("00");

  useEffect(() => {
    async function animateNumber() {
      await fadeNumberControl.start({ opacity: 0 })
      setCurrentNumber(pageNumber);
      await fadeNumberControl.start({ opacity: 1 });
    };
    animateNumber();
  }, [pageNumber])

  return (
    <CounterContainer>
      <motion.div animate={fadeNumberControl}>
        <NumberDisplay>{currentNumber}</NumberDisplay>
      </motion.div>
      <Spike />
    </CounterContainer>
  )
}