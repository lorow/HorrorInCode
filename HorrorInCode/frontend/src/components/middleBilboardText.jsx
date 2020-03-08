import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  grid-area: nothingLeftMain;
  width: auto;
  grid-column: span 3;
  display: -webkit-box;
  align-items: center;
  transform: translateX(${props => props.offsetBy});
`;

const TextDisplay = styled.p`
  color: white;
  opacity: 0.1;
  font-size: calc(2rem + 9vw);
  margin-left: 40px;
  margin-right: 40px;
  user-select: none;
`;

export default function MiddleBilboardText({ textToDIsplay, offsetBy }) {
  console.log(offsetBy)
  return (
    <TextContainer offsetBy={offsetBy ? offsetBy : '-250px'}>
      <TextDisplay>{textToDIsplay}</TextDisplay>
      <TextDisplay>{textToDIsplay}</TextDisplay>
      <TextDisplay>{textToDIsplay}</TextDisplay>
      <TextDisplay>{textToDIsplay}</TextDisplay>
    </ TextContainer>
  )
}