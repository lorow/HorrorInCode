import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Greeter from '../components/greeter';
import Pagination from '../components/pagination';
import ProjectSelect from '../components/projectSelect';
import WorkDetail from '../components/workDetail';
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
  const [projectVisible, setProjectVisible] = useState({ state: false, projectId: -1 });

  const onClickNext = () => {
    setSlideId(slideId + 1);
  }

  const onClickPrev = () => {
    setSlideId(slideId - 1);
  }

  const onProjectClick = (projectID) => {
    // the user decided that they want to see that project, fair enough,
    // set the id first, so that the useEffect can trigger and handle 
    // animating everything out
    if (!projectVisible.state)
      setProjectVisible({ ...projectVisible, projectId: projectID })
  }

  useEffect(() => {
    dispatch(setBackgroundText("MY WORKS"));
    dispatch(setVisualPageIndex("01"));
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    // triggers only if the project updates
    if (!projectVisible.state && projectVisible.projectId !== -1) {
      //  we only do stuff if both: the id is not negative and we haven't animated anything yet
      // second rule indicated by the state field

      // if so, animate everything out and let the project panel show itself
      // animateProjectEntry();
      setProjectVisible({ ...projectVisible, state: true })
    }
  }, [projectVisible])

  useEffect(() => {
    console.log(projects)
  }, [projects])

  return (
    <Main>
      <Greeter orderID={0} variants={animVariants} />
      <ProjectSelect orderID={1} variants={animVariants} onClick={onProjectClick} slideId={slideId} setSlideId={setSlideId} />
      <Pagination orderID={2} variants={animVariants} onClickPrev={onClickPrev} onClickNext={onClickNext} />
      {
        projectVisible.state &&
        <WorkDetail projectID={projectVisible.projectId} />
      }
    </Main>
  );
}