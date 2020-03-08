import React, { Component } from 'react';
import LandingPage from './pages/landingPage';
import Navbar from './components/navbar';
import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <LandingPage />
      </>
    )
  }
}

export default App;
