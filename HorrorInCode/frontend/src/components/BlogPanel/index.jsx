import React from 'react';
import './style.scss';

export default function BlogPanel(props) {

  return (
    <section className="blog-section">
      <h1 className="blog__section__title">Latest articles</h1>
      <hr className="blog__section__title--decoration"></hr>

      <section className="blog__article__container">
        <article className="blog__article">
          <div className="blog__article__flex">
            <h2 className="blog__article__title">JWT TOKENS</h2>
            <p className="blog__article__description">A cure for the headaches?</p>
            <hr className="blog__article__decoration"/>
          </div>
          <img className="blog__article__background" src="https://i.pinimg.com/originals/b8/94/01/b89401be81d329ecb27280e34ef49627.jpg" alt="" srcset=""/>
        </article>

        <article className="blog__article">
          <div className="blog__article__flex">
            <h2 className="blog__article__title">DESIGN SUCKS</h2>
            <p className="blog__article__description">How to make your depression depressed</p>
            <hr className="blog__article__decoration"/>
          </div>
          <img className="blog__article__background" src="https://i.pinimg.com/originals/b8/94/01/b89401be81d329ecb27280e34ef49627.jpg" alt="" srcset=""/>
        </article>

        <article className="blog__article">
          <div className="blog__article__flex">
            <h2 className="blog__article__title">2137 IDEAS</h2>
            <p className="blog__article__description">To fuck everything up</p>
            <hr className="blog__article__decoration"/>
          </div>
          <img className="blog__article__background" src="https://i.pinimg.com/originals/b8/94/01/b89401be81d329ecb27280e34ef49627.jpg" alt="" srcset=""/>
        </article>

      </section>
    </section>
  )
}