import React from 'react';
import './style.scss'

export default function ProjectDetail(props) {
  
  const getPhotoTile = (photoURL, key) => {
    return (
      <img key={key} className={"projectDetail__gallery__img projectDetail__gallery__tile--" + (key+1)} alt={"project " + props.projectTitle + " screenshot"} src={photoURL}/> 
    )
  }
  
  let photos = props.projectScreenshots.map( (url, index) => getPhotoTile(url, index) )
  
  return(
    <section className="projectDetail__contener">
      <header className="projectDetail__header">
        <h2 className="projectDetail__title">Summary</h2>
        <a target="_blank" rel="noopener noreferrer" href={props.projectURL} className="projectDetail__repoButton">Check it out!</a>
      </header>

      <p className="projectDetail__description">{props.projectDescription}</p>
      
      <h3 className="projectDetail__title">Gallery</h3>

      <div className="projectDetail__gallery">
        {photos}
      </div>
    </section>
  )
}