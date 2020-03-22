import React, { useState, useEffect } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { motion } from 'framer-motion'
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

const ProjectName = styled.h2`
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
  img{
    width: 100%;
    height: 100%;
  }
`;

export default function ProjectSelect(props) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    }
  }, []);

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
          onChange={id => {
            props.setSlideId(id)
          }}
        >
          <ProjectLink onClick={() => props.onClick(0)}>
            <img src={"https://placebear.com/864/550"} alt="kotek" />
          </ProjectLink>
          <ProjectLink onClick={() => props.onClick(1)}>
            <img src={"http://placekitten.com/864/550"} alt="kotek" />
          </ProjectLink>
          <ProjectLink onClick={() => props.onClick(2)}>
            <img src={"http://placekitten.com/864/550"} alt="kotek" />
          </ProjectLink>
        </Carousel>
      </ProjectSlider>
      <ProjectName>Name of the current project</ProjectName>
    </ProjectSelectContainer>
  )
}