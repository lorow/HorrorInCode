import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Greeter from '../components/greeter';
import Pagination from '../components/pagination';
import { setBackgroundText } from '../actions/pageActions';

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 3;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(10px, 8vw) minmax(400px, 1fr) minmax(10px, 8vw);
  grid-template-rows: 0.4fr 1fr 3fr 1fr;
  grid-template-areas:
  "nothing-left-top       top     nothing-right-top"
  "nothing-left-nav   navigation  nothing-right-nav"
  "nothingLeftMain   main     nothingRightMain"
  "nothing-left     bottom    nothing-right";

  @media (max-width: 768px) {
    grid-template-columns: 30px 1fr 30px;
  }
`;

export default function LandingPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBackgroundText("MY WORKS"))
  }, [dispatch]);

  return (
    <Main>
      <Greeter />
      <Pagination />
    </Main>
  );
}