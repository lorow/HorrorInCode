import React, { useState }from 'react';
import anime from 'animejs';
import './style.scss';

export default function ProjectsPanel(props) {

  const [expanded, setExpanded] = useState(false);

  const handleImageResize = () =>{

    if (expanded === false){

      const expandImageTimeline = anime.timeline({
        duration: 700,
        easing: 'linear'
      })
    
      expandImageTimeline
      .add({
        duration: 300,
        targets: '.project__cover',
        width: '100vw',
        height: '100vh',
        borderRadius: ['100%', '0%'],
      })
      .add({
        targets: '.project__cover',
        height: '85vh',
        marginTop: '-15vh',
        delay: 200,
        duration: 600,
        easing: 'linear',
        complete: function(anim){
          setExpanded(true);
        }
      }, 800)    
    }
    else{

      anime({
        duration: 500,
        easing: 'linear',
        targets: '.project__cover',
        width: ['100vw','28vw'],
        height: {
          value:['30vh','28vw'],
          delay:250 
        },
        marginTop: 0,
        borderRadius: ['0%','50%'],
        complete: function(anim){
          setExpanded(false);
        }
      })
    }
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

        <div className="project__cover" onClick={() => {handleImageResize()}}>
          <img className="project__cover__image" src="https://i.pinimg.com/originals/b8/94/01/b89401be81d329ecb27280e34ef49627.jpg" alt="fluffy bot project cover"/>
        </div>

        <a className="project__button--next" href="#next-article">
        <img className="project__icon--small project__icon--right" src="img/right-arrow.svg" alt="next post"/>
        </a>

      </div>
    </section>
  );
}