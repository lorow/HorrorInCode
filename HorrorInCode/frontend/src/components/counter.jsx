import React from 'react';
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
  return (
    <CounterContainer>
      <NumberDisplay>{pageNumber}</NumberDisplay>
      <Spike />
    </CounterContainer>
  )
}