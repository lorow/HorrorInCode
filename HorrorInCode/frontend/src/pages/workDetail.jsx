import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectDetailContainer = styled(motion.article)`
  /* width: 100vw; */
  position: relative;
  grid-area: navigation;
`;

const GoBackButton = styled.button``;


export default function WorkDetail(props) {

  const { projectId } = useParams();

  return (
    <ProjectDetailContainer exit={{}}>
      <h1>
        {projectId}
        <GoBackButton>

        </GoBackButton>
      </h1>
    </ProjectDetailContainer>
  )
}