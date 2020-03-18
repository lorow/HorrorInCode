import React from 'react';
import styled from 'styled-components';

const GreeterContainer = styled.div`
  margin-top: 10px;
  grid-area: navigation;
  color: white;
`;

const InlineText = styled.div`
  display: flex;
  align-items: flex-end;

  margin-bottom: 20px;
`;

const HiMark = styled.p`
  font-size: calc(1.8rem + 1vw);
  padding-right: 10px;
  font-weight: 700;
  line-height: 40px;
`;

const GreeterText = styled.p`
  text-align: left;
  margin-left:0; 
  line-height: 33px;
  font-size: calc(.8rem + .5vw);
  color: white;
  opacity:  0.7;
`;

export default function Greeter(props) {
  return (
    <GreeterContainer>
      <InlineText>
        <HiMark>Hello there!</HiMark>
        <HiMark hidden>General kenobi</HiMark>
      </InlineText>
      <GreeterText>I’m Zdzisław, and I'm a passionate developer from Poland.</GreeterText>
      <GreeterText>I love what I do and I strive to get better every day.</GreeterText>
    </GreeterContainer>
  )
}