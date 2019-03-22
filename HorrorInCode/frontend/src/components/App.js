import React, { Component } from 'react';
import Navbar from './Navbar';
import ContentHolder from './ContentHolder'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <ContentHolder />
      </React.Fragment>
    );
  }
}

export default App;
