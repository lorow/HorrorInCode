import React, { useEffect } from 'react';
import styled from 'styled-components';

const ProjectDetailContainer = styled.article`
  /* width: 100vw; */
  grid-area: navigation;
`;

export default function WorkDetail({ projectID, onClickReturn }) {

  useEffect(() => {
    console.log(projectID)
  }, [projectID])

  return (
    <ProjectDetailContainer>
      <h1>
        {projectID}
      </h1>
    </ProjectDetailContainer>
  )
}