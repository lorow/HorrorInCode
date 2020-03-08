import React, { Component } from 'react';
import LandingPage from './pages/landingPage';
import Navbar from './components/navbar';
import MiddleBilboardText from './components/middleBilboardText';
import Counter from './components/counter';

import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MiddleBilboardText textToDIsplay={"My work"} />
        <LandingPage />
        <Counter pageNumber={"01"} />
      </>
    )
  }
}

export default App;
