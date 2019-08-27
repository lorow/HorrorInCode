import React from 'react';
import './style.scss';

export default function LandingPanel(props) {

  return (
    <section className="landingPanel">
      <h1 className="landing-title anime-stagger">
        Hi there!
      </h1>

      <h2 className="text-field anime-stagger">
        I am Zdzisław, a creative developer form Poland, and this is 
        HorrorInCode, a place where I combine the horrors of code I 
        encounter as well as present myself.
      </h2>

      <section className="button-section anime-stagger">
        <a href="#blog" className="uk-button uk-visible@s" style={{
            background: 'linear-gradient(to right, #0008FF, #050AB2)',
            color: 'white',
            padding: '4px 60px',
            borderRadius: '80px'
          }}>Blog</a>
        <a href="#contact" className="uk-button hrc-button-fill uk-visible@s" style={{ borderRadius: '80px', padding: '2px 50px', marginLeft: '20px'}}>Contact</a>
        <a href="#projects" className="uk-button hrc-button-fill uk-hidden@s" style={{ borderRadius: '80px', padding: '2px 50px' }}>See my work</a>
      </section>

    </section>
  );
}