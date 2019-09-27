import React, { useState }from 'react';
import anime from 'animejs';
import ProjectSlice from '../../components/ProjectSlice';
import './style.scss';

export default function ProjectsPanel(props) {

  const [expanded, setExpanded] = useState(false);
  
  const prepareAnimation = direction => {
    let timeline = anime.timeline({
      duration: 1000,
      autoplay: false,
      direction: direction,
    })
  
    timeline.add({
    
      duration:750,
      targets: '.project__cover',
      overflowX:'hidden',
  
      width:['60vh', '300vh'],
      height:['60vh', '100vh'],
      borderRadius:['100%','0%'],
  
      easing: 'cubicBezier(0.620, -0.420, 0.390, 1.385)'
  
    }).add({
      targets:'.project__title',
      color: ['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 1)'],
      top: ['37.9vh', '28vh'],
      easing: 'cubicBezier(0.315, 0.000, 0.330, 0.825)'
    })
    return timeline
  }

  const handleImageResize = () =>{

    let expandImageTimeline = expanded ? prepareAnimation('reverse') : prepareAnimation('normal')
    expandImageTimeline.play()
    expandImageTimeline.finished.then(() => {setExpanded(!expanded)})
  
  }

  return (
    <section className="project__section">
      <ProjectSlice handleImageResize={handleImageResize}/>
    </section>
  );
}