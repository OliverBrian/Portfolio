import React, { Component } from 'react';

import Sidebar from './Components/Sidebar';
import Container from './Components/Container';
import Footer from './Components/Footer';

import './App.scss';


class App extends Component {

  render () {
    return (
        <div className="mainContainer">
          <Sidebar/>
          <Container/>
          <Footer/>
        </div>
    );
  }
}

export default App;
