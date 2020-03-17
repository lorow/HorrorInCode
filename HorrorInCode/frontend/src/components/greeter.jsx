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
  font-size: calc(2rem + 1vw);
  font-weight: 700;
  line-height: 40px;
`;

const GreeterText = styled.p`
  text-align: left;
  margin-left:${props => props.displayName ? "10px" : "0"}; 
  line-height:${props => props.displayName ? "8px" : "33px"};
  font-size: ${props => props.displayName ? "calc(1.8rem + 0.5vw)" : "calc(1rem + .5vw);"};
  color: ${props => props.displayName ? "white" : "#efefff"};
  opacity: ${props => props.displayName ? 1 : 0.8};
`;

export default function Greeter(props) {
  return (
    <GreeterContainer>
      <InlineText>
        <HiMark>Hi!</HiMark>
        <GreeterText displayName>I’m Zdzisław.</GreeterText>
      </InlineText>
      <GreeterText>I’m a passionate developer from Poland.</GreeterText>
      <GreeterText>I love what I do and I strive to get better every day.</GreeterText>
    </GreeterContainer>
  )
}