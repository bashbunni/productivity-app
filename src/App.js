import React, { Component, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SketchPicker } from 'react-color';
import Popup from './Components/Popup';
import IconsList from './Components/IconsList';
import Home from './Pages/Home'
import Nav from './Components/Nav';
import './styles/App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
