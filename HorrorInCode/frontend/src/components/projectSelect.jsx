import React, { useState, useEffect } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styled from 'styled-components';

const ProjectSelectContainer = styled.article`
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
    <ProjectSelectContainer>
      <ProjectSlider>
        <Carousel
          slidesPerPage={windowWidth <= "800" ? 1 : 2}
          infinite
          value={props.slideId}
          onChange={id => {
            props.setSlideId(id)
          }}
        >
          <ProjectLink>
            <img src={"http://placekitten.com/864/550"} alt="kotek" />
          </ProjectLink>
          <ProjectLink>
            <img src={"http://placekitten.com/864/550"} alt="kotek" />
          </ProjectLink>
          <ProjectLink>
            <img src={"http://placekitten.com/864/550"} alt="kotek" />
          </ProjectLink>
        </Carousel>
      </ProjectSlider>
      <ProjectName>Name of the current project</ProjectName>
    </ProjectSelectContainer>
  )
}