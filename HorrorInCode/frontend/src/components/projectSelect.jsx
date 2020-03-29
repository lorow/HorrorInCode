import React, { useState, useEffect } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { motion, useAnimation } from 'framer-motion'
import '@brainhubeu/react-carousel/lib/style.css';
import styled from 'styled-components';

const ProjectSelectContainer = styled(motion.article)`
  grid-area: main;
  grid-column: 2 /4;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: .2fr .1fr minmax(0,.2fr) minmax(0, 1fr);
  grid-template-areas: "spacer text galery galery";
`;

const ProjectName = styled(motion.h2)`
  color: white;
  font-size: calc(1.2rem + 1.3vw);
  margin-top: 2rem;
  z-index: 1;
  grid-row: 1;
  grid-column: 2 / 4;

  height: min-content;
  @media (max-width: 550px) {
    margin-top: 0;
  }
`;

const ProjectSlider = styled.div`
  grid-row: 1;
  grid-column: 3 / 5;
`;

const ProjectLink = styled.a`
  margin-right: 20px;
  width: 100%;
  height: 100%;
  
  min-height: 40vh;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ProjectSelect(props) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [projectTitle, setProjectTItle] = useState("");

  const headerController = useAnimation();

  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    }
  }, []);

  useEffect(() => {
    // every time the projectID changes, we should animate oout the header, change the text, and animate the header back in
    const animHelper = async () => {
      await headerController.start({ opacity: 0, duration: 50 });

      const currentProject = props.projects.filter(project => project.id === String(props.projectID))[0];
      if (currentProject)
        setProjectTItle(currentProject.name);
      else
        setProjectTItle("");

      await headerController.start({ opacity: 1, duration: 50 });
    }

    animHelper();
  }, [props.projectID])

  return (
    <ProjectSelectContainer
      custom={props.orderID}
      initial="initial"
      animate="in"
      exit="out"
      variants={props.variants}
    >
      <ProjectSlider>
        <Carousel
          slidesPerPage={windowWidth <= "800" ? 1 : 2}
          infinite
          value={props.slideId}
          onChange={(id) => { console.log("slided"); props.setSlideId(id) }}
        >
          {
            props.projects.map(project => (
              <ProjectLink key={project.id}>
                <img src={`/media/${project.cover}`} alt={project.name} />
              </ProjectLink>
            ))
          }
        </Carousel>
      </ProjectSlider>
      <ProjectName animate={headerController} >{projectTitle}</ProjectName>
    </ProjectSelectContainer>
  )
}