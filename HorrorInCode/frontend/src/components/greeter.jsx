import React from 'react';
import styled from 'styled-components';

const GreeterContainer = styled.div`
  grid-area: navigation;
  color: white;
`;

const InlineText = styled.div`
  display: flex;
  align-items: flex-end;

  margin-bottom: 20px;
`;

const HiMark = styled.h1`
  font-size: calc(50px);
  line-height: 39px;
`;

const GreeterText = styled.p`
  font-size: 33px;
  text-align: left;
  margin-left:${props => props.displayName ? "10px" : "0"}; 
  line-height:${props => props.displayName ? "20px" : "33px"};
  font-size: ${props => props.displayName ? "30px" : "25px"};
  opacity: ${props => props.displayName ? 1 : 0.8};
`;

export default function Greeter(props) {
  return (
    <GreeterContainer>
      <InlineText>
        <HiMark>Hi!</HiMark>
        <GreeterText displayName>I’m zdzisław.</GreeterText>
      </InlineText>
      <GreeterText>I’m a passionate developer from Poland.</GreeterText>
      <GreeterText>I love what I do, I strive to get better every day.</GreeterText>
    </GreeterContainer>
  )
}