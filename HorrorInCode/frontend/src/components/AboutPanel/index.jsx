import React, { useState } from 'react';
import AboutmeSubSection from '../AboutmeSubSection';
import './style.scss';


export default function AboutPanel(props) {

  const [activePanel, setActivePanel] = useState('ABOUT ME');

  const titles = ['ABOUT ME', 'SKILLS', 'EDUCATION', 'PASSIONS'];

  const descriptions = {
    'ABOUT ME': 'lorem',
    'SKILLS': 'lorem ipsum',
    'EDUCATION': 'lorem ipsum dolom',
    'PASSIONS': 'lorem ipsum dolom I have no idea how it goes'
  };

  var classNames = require('classnames');

  const handleTitleChange = (title) => {
    console.log(title);
    setActivePanel(title);
  };

  const listButtons = titles.map((title) =>
    <a href="#about"
      className={
        classNames({
          'about-button': true,
          'about-button--active':    title === activePanel ? true : false,
          'about-button--aboutMe':   title === 'ABOUT ME'  ? true : false,
          'about-button--skills':    title === 'SKILLS'    ? true : false,
          'about-button--education': title === 'EDUCATION' ? true : false,
          'about-button--passions':  title === 'PASSIONS'  ? true : false
        })
      }
      onClick={(e) => { handleTitleChange(title) }}>
      {title}
    </a>
  );

  return (
    <section className="about-section">

      {listButtons}
      <div className="about--textBackground"></div>
      <AboutmeSubSection sectionTItle={activePanel} sectionDescription={descriptions[activePanel]} />

    </section>
  );
}