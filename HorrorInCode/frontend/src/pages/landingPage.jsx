import React from 'react';
import styled from 'styled-components';
import Greeter from '../components/greeter';
import Pagination from '../components/pagination';

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(240.48deg, #091430 0.49%, rgba(9, 20, 48, 0.97) 100%);
  display: grid;
  grid-template-columns: minmax(10px, 8vw) minmax(400px, 1fr) minmax(10px, 8vw);
  grid-template-rows: 0.4fr 1fr 3fr 1fr;
  grid-template-areas:
  "nothing-left-top       top     nothing-right-top"
  "nothing-left-nav   navigation  nothing-right-nav"
  "nothingLeftMain   main     nothingRightMain"
  "nothing-left     bottom    nothing-right";

  @media (max-width: 768px) {
    grid-template-columns: 0px 1fr 0px;
  }
`;

export default function LandingPage(props) {
  return (
    <Main>
      <Greeter />
      <Pagination />
    </Main>
  );
}