import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Greeter from '../components/greeter';
import Pagination from '../components/pagination';
import ProjectSelect from '../components/projectSelect';
import { rootTransition } from '../transitions';
import { setBackgroundText, setVisualPageIndex } from '../actions/pageActions';
import { history } from '../history';
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
  const [previousSlideId, setPreviousSlideId] = useState(-1);
  const [projectId, setProjectID] = useState(0);

  useEffect(() => {
    dispatch(setBackgroundText("MY WORKS"));
    dispatch(setVisualPageIndex("01"));
    dispatch(fetchProjects());
  }, [dispatch]);


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
    history.push(`/project/${projectID}`);
  }

  useEffect(() => {
    if (projects.data && !(projects.isSingle)) {
      if (!(previousSlideId === slideId)) {

        const newState = previousSlideId > slideId ? projectId - 1 : projectId + 1;
        // should the newState go negative, set the project ID to the very end
        // of the list
        if (newState < 1) {
          setProjectID(projects.data.length);
          // should the newState overflow the amount of projects, set it to the
          // very first one
        } else if (newState > projects.data.length) {
          setProjectID(1);
          // otherwise it's fine
        } else {
          setProjectID(newState);
        }
      }
    }
  }, [slideId, previousSlideId, projects])

  return (
    <Main>
      <Greeter orderID={0} variants={animVariants} />
      {!projects.isSingle &&
        <ProjectSelect
          projects={projects.data}
          orderID={1}
          variants={animVariants}
          onClick={onProjectClick}
          slideId={slideId}
          setSlideId={handleSlideChange}
          projectID={projectId}
        />
      }
      <Pagination orderID={2} variants={animVariants} onClickPrev={onClickPrev} onClickNext={onClickNext} />
    </Main>
  );
}