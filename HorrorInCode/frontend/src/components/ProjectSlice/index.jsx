import React from 'react';

export default function ProjectSlice(props) {
    return(
        <div className="image__container">
        
        <a className="project__button--previous" href="#previous-article">
          <img className="project__icon--small" src="img/right-arrow.svg" alt="previous post" style={{transform: "rotate(180deg)"}}/>
        </a>
        
        <h1 className="project__title">
            FLUFFY BOT
        </h1>

        <div className="project__cover" onClick={props.handleImageResize}>
          <img className="project__cover__image" src="https://i.pinimg.com/originals/b8/94/01/b89401be81d329ecb27280e34ef49627.jpg" alt="fluffy bot project cover"/>
        </div>

        <a className="project__button--next" href="#next-article">
        <img className="project__icon--small project__icon--right" src="img/right-arrow.svg" alt="next post"/>
        </a>
      </div>
    )
}