import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Greeter from '../components/greeter';
import Pagination from '../components/pagination';
import ProjectSelect from '../components/projectSelect';
import { rootTransition } from '../transitions';
import { setBackgroundText, setVisualPageIndex } from '../actions/pageActions';
import { fetchProjects } from '../actions/projectActions';

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 3;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(10px, 8vw) minmax(400px, 1fr) minmax(10px, 8vw);
  grid-gap: 20px;
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
  const animVariants = rootTransition['landing'];
  const projects = useSelector(state => state.projects);
  const [slideId, setSlideId] = useState(0);
  const [previousSlideId, setPreviousSlideId] = useState(0);
  const [projectId, setProjectID] = useState(-1);

  const onClickNext = () => {
    setPreviousSlideId(slideId);
    setSlideId(slideId + 1);
  }

  const onClickPrev = () => {
    setPreviousSlideId(slideId);
    setSlideId(slideId - 1);
  }

  const handleSlideChange = (id) => {
    setPreviousSlideId(slideId);
    setSlideId(id)
  }

  const onProjectClick = (projectID) => {
    // push the history to /projects/:id
    // AnimatePresence will take care of it
  }

  useEffect(() => {
    console.log("cur", slideId, "prev", previousSlideId);

    const newState = previousSlideId > slideId ? projectId - 1 : projectId + 1;
    setProjectID(newState)

    const n = 3; // amount of tiles, calculated from the data from the backend

    if (newState < 0) {
      setProjectID(n);
    } else if (newState > n) {
      setProjectID(0);
    } else {
      setProjectID(newState);
    }

  }, [slideId, previousSlideId])

  useEffect(() => {
    dispatch(setBackgroundText("MY WORKS"));
    dispatch(setVisualPageIndex("01"));
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    console.log("Project", projectId)
  }, [projectId])

  return (
    <Main>
      <Greeter orderID={0} variants={animVariants} />
      <ProjectSelect orderID={1} variants={animVariants} onClick={onProjectClick} slideId={slideId} setSlideId={handleSlideChange} />
      <Pagination orderID={2} variants={animVariants} onClickPrev={onClickPrev} onClickNext={onClickNext} />
    </Main>
  );
}