import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popup from './Popup';
import './App.css';

// FUNCTIONALITY

/**
 * Adds a habit to track
 */
function addHabit() {
  alert("button clicked");
}

// UI

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  function togglePopup() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  return (
    < nav className="sidebar" >
      <button className="nav-btn" id="home"><FontAwesomeIcon icon={["fas", "igloo"]} />
        <p className="nav-text">Home</p>
      </button>
      <button className="nav-btn" id="slack"><FontAwesomeIcon icon={["fab", "slack-hash"]} />
        <p className="nav-text">Slack</p>
      </button>
      <button className="nav-btn" id="gmail"><FontAwesomeIcon icon={["far", "envelope"]} />
        <p className="nav-text">Gmail</p>
      </button>
      <button className="nav-btn" id="github"><FontAwesomeIcon icon={["fab", "github"]} />
        <p className="nav-text">Github</p>
      </button>
      <button className="nav-btn" id="add" onClick={togglePopup}><FontAwesomeIcon icon={["fas", "plus-circle"]} />
        <p className="nav-text">New</p>
      </button>
    </nav >
  );
}


function App(togglePopup, isOpen) {


  return (
    <div className="App">
      <Nav />
      <div>
        <input
          type="button"
          value="Click to Open Popup"
          onClick={togglePopup}
        />{isOpen && <Popup
          content={<>
            <b>Design your Popup</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Test button</button>
          </>}
          handleClose={togglePopup}
        />}
      </div>
    </div>
  );
}

export default App;
