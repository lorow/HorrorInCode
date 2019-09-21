import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Navbar(props) {
  return (
    <header className="nav uk-sticky" style={{zIndex: 9, top: 0, left: 0, right: 0}} >
      <div className="uk-container hrc-navbar">
        <nav className="uk-navbar-transparent uk-navbar" data-uk-navbar="">
        
          <div className="uk-navbar-left">
            <h1 className="uk-margin-remove uk-navbar-item uk-logo" style={{ fontSize: '32px', fontWeight: '500', color: 'white' }}>HorrorInCode</h1>
          </div>

          <div className="uk-navbar-right">
            <div className="uk-visible@m">
              <ul className="uk-navbar-nav">
                <li> <Link to={'/'} className="uk-button hrc-navbar-item uk-button-large uk-padding-remove uk-margin-right uk-margin-left">Home</Link> </li>
                <li> <Link to={'/blog'} className="uk-button hrc-navbar-item uk-button-large uk-padding-remove uk-margin-right uk-margin-left">Blog</Link> </li>
                <li> <Link to={'/projects'} className="uk-button hrc-navbar-item uk-button-large uk-padding-remove uk-margin-right uk-margin-left">Projects</Link> </li>
                <li> <Link to={'/about'} className="uk-button hrc-navbar-item uk-button-large uk-padding-remove uk-margin-right uk-margin-left">About me</Link> </li>
                <li> <Link to={'/contact'} className="uk-button hrc-navbar-item uk-button-large uk-padding-remove uk-margin-right uk-margin-left">Contact</Link> </li>

              </ul>
            </div>
            <a className="uk-navbar-toggle uk-hidden@m" href="localhost" uk-toggle="target: #offcanvas-nav-primary">
              <span uk-navbar-toggle-icon></span> <span className="uk-margin-small-left"><img src="img/menu.svg" alt="Menu"/></span>
            </a>
          </div>
        </nav>
      </div>

      <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
          <button className="uk-offcanvas-close uk-close uk-icon" type="button" uk-close=""><svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg></button>
          <div className="uk-offcanvas-bar uk-flex uk-flex-column uk-width-1-1" style={{backgroundColor: '#3253FB'}}>
              <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
              make a function that will handle closing of the offcanvas without the use of "uk-close"
                  <li className="uk-active"><Link to={'/'}>Home</Link></li>
                  <li className="uk-active"><Link to={'/blog'}>Blog</Link></li>
                  <li className="uk-active"><Link to={'/projects'}>Projects</Link></li>
                  <li className="uk-active"><Link to={'/about'}>About me</Link></li>
                  <li className="uk-active"><Link to={'/contact'}>Contact</Link></li>
              </ul>
          </div>
      </div>

    </header>
  );
}

export default Navbar;