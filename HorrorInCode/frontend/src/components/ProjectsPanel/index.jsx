import React, { useState }from 'react';
import anime from 'animejs';
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
      <div className="image__container">
        
        <a className="project__button--previous" href="#previous-article">
          <img className="project__icon--small" src="img/right-arrow.svg" alt="previous post" style={{transform: "rotate(180deg)"}}/>
        </a>
        
        <h1 className="project__title">
            FLUFFY BOT
        </h1>

        <div className="project__cover" onClick={handleImageResize}>
          <img className="project__cover__image" src="https://i.pinimg.com/originals/b8/94/01/b89401be81d329ecb27280e34ef49627.jpg" alt="fluffy bot project cover"/>
        </div>

        <a className="project__button--next" href="#next-article">
        <img className="project__icon--small project__icon--right" src="img/right-arrow.svg" alt="next post"/>
        </a>

      </div>
    </section>
  );
}