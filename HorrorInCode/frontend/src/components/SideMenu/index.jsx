import React from 'react';
import anime from 'animejs';
import './style.scss';

export default function SideMenu(props) {

  function emailHover(scale, degree) {
    anime({
      targets: '#emailButton',
      scale: scale,
      rotate: degree
    })
  }

  function iconOpacity(targets, opacity) {
    anime({
      targets: targets,
      opacity: opacity
    })
  }

  return (
    <aside className="uk-container uk-position-center-right uk-position-fixed uk-margin-xlarge-right uk-flex uk-flex-column uk-visible@m" style={{ alignItems: 'center' }}>
      
      <div id="Twitter" onMouseOver={(e) => { iconOpacity("#Twitter", [0.4, 1]) }} onMouseLeave={(e) => { iconOpacity("#Twitter", [1, 0.4]) }} style={{ width: '30px', height: '30px', backgroundColor: 'transparent', marginTop: '20px', opacity: 0.4 }}>
        <img src="img/twitter.svg" alt="" srcSet="" />
      </div>

      <div id="Github" onMouseOver={(e) => { iconOpacity("#Github", [0.4, 1]) }} onMouseLeave={(e) => { iconOpacity("#Github", [1, 0.4]) }} style={{ width: '30px', height: '30px', backgroundColor: 'transparent', marginTop: '20px', marginBottom: '20px', opacity: 0.4 }}>
        <img src="img/github.svg" alt="" srcSet="" />
      </div>

      <div style={{ width: '5px', height: '5px', backgroundColor: 'white', borderRadius: '100%', opacity: .8 }}></div>
      <div style={{ width: '2px', height: '40px', backgroundColor: 'white', opacity: .8, marginTop: '10px' }}></div>
      <div style={{ width: '5px', height: '5px', backgroundColor: 'white', opacity: .8, borderRadius: '100%', marginTop: '10px' }}></div>

      <div style={{ width: '8px', height: '8px', backgroundColor: 'transparent', opacity: .8, border: "2px solid white", transform: 'rotate(45deg)', marginTop: '10px' }}></div>
      
      <div id="emailButton" onMouseOver={(e) => { emailHover(1.2, 20) }} onMouseLeave={(e) => { emailHover(1, 0) }} style={{ width: '35px', height: '35px', backgroundColor: 'transparent', marginTop: '20px' }}>
        <a href="/contact"><img src="img/email.svg" alt="" srcSet="" /></a>
      </div>

    </aside>
  )
}