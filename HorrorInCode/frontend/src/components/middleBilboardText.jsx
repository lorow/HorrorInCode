import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const TextContainer = styled(motion.div)`
  grid-area: nothingLeftMain;
  width: auto;
  grid-column: span 3;
  display: -webkit-box;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 0;
  align-items: center;
  transform: translateX(${props => props.offsetBy});
`;

const TextDisplay = styled.p`
  color: white;
  opacity: 0.1;
  font-size: calc(2rem + 9vw);
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 70px;
  user-select: none;
`;

export default function MiddleBilboardText({ textToDIsplay, offsetBy }) {
  const [pageNote, setPageNote] = useState("")
  const TextControl = useAnimation();

  useEffect(() => {
    async function animateText() {
      await TextControl.start({ opacity: 0 });
      setPageNote(textToDIsplay);
      await TextControl.start({ opacity: 1 });
    }
    animateText();

  }, [textToDIsplay])

  return (
    <TextContainer animate={TextControl} offsetBy={offsetBy ? offsetBy : '-250px'}>
      <TextDisplay>{pageNote}</TextDisplay>
      <TextDisplay>{pageNote}</TextDisplay>
      <TextDisplay>{pageNote}</TextDisplay>
      <TextDisplay>{pageNote}</TextDisplay>
    </ TextContainer>
  )
}