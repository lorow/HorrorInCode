import React from 'react';
import './style.scss';

export default function BlogSlice(props) {
  return (
    <article className="blog__article">
      <div className="blog__article__flex">
        <h2 className="blog__article__title">{props.articleTitle}</h2>
        <p className="blog__article__description">{props.articleShortDesc}</p>
        <hr className="blog__article__decoration"/>
      </div>
      <img className="blog__article__background" src={props.artBackground} alt="" srcset=""/>
    </article>
  )
}