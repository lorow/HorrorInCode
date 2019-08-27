import React from 'react';
import './style.scss';

export default function BlogPanel(props) {

  return (
    <section className="blog-section">
      <h1 className="post-title">
        Some Long Text
      </h1>
      <a className="previous-button" href="#previous-article">
        <img src="img/right-arrow.svg" alt="previous post" style={{transform: "rotate(180deg)"}}/>
      </a>
      
      <a className="next-button" href="#previous-article">
        <img src="img/right-arrow.svg" alt="next post"/>
      </a>
      
      <figure>
        <div className="image-container">
          <img src="https://i.pinimg.com/originals/b8/94/01/b89401be81d329ecb27280e34ef49627.jpg" alt="lol"/>
          <a className="button-readMore" href="#article-endpoint"> Read more!</a>
        </div>
      </figure>
    </section>
  )
}