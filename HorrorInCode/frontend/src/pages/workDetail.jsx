import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackArrow from '../components/BackArrow';
import styled from 'styled-components';

const ProjectDetailContainer = styled(motion.article)`
  /* width: 100vw; */
  position: relative;
  grid-area: navigation;
`;

export default function WorkDetail(props) {

  const { projectId } = useParams();

  return (
    <ProjectDetailContainer exit={{}}>
      <h1>
        {projectId}
        <BackArrow />
      </h1>
    </ProjectDetailContainer>
  )
}