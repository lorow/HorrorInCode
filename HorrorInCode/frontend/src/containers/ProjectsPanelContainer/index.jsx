import React, { useState }from 'react';
import projectsDataPile from './data.js'
import { prepareAnimation } from './utils.js'
import ProjectSlice from '../../components/ProjectSlice';
import ProjectDetail from '../../components/ProjectDetail';
import '../../components/ProjectSlice/style.scss';

export default function ProjectsPanel(props) {

  const [expanded, setExpanded] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleImageResize = () =>{

    let expandImageTimeline = expanded ? prepareAnimation('reverse') : prepareAnimation('normal')
    expandImageTimeline.play()
    expandImageTimeline.finished.then(() => {setExpanded(!expanded)})
  
  }

  const switchProject = direction => {

    let nextIndex = 0;

    if(direction==="previous")
      nextIndex = Math.abs(activeProjectIndex - 1);
    else
      nextIndex = activeProjectIndex + 1;

    if (nextIndex > projectsDataPile.length -1)
      nextIndex = 0;

    if (activeProjectIndex === 0 && nextIndex === 1 && direction==="previous")
      nextIndex = 2;

    setActiveProjectIndex(nextIndex);
  }

  if (! expanded)
    return (
      <section className="project__section">
        <ProjectSlice 
          handleImageResize={handleImageResize}
          PreviousProject={() => switchProject("previous")}
          NextProject={() => switchProject("next")}
          {...projectsDataPile[activeProjectIndex]}
          />
      </section>
    );
  else
    return (
      <section className="project__section">
        <ProjectSlice 
          handleImageResize={handleImageResize}
          PreviousProject={() => switchProject("previous")}
          NextProject={() => switchProject("next")}
          {...projectsDataPile[activeProjectIndex]}
          />
        
        <ProjectDetail {...projectsDataPile[activeProjectIndex]} />
      </section>
    );
}