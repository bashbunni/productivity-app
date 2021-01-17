import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import Popup from './Popup';
import { SketchPicker } from 'react-color';
import IconsList from './IconsList';
import './App.css';

// FUNCTIONALITY

/**
 * Adds a habit to track
 */

// UI


function App() {
  let showPopup = false;

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <nav className="sidebar" >
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
      </nav>

      {isOpen && <Popup
        content={<>
          <Form>
            <Form.Group controlId="habitName">
              <Form.Label>Habit Name</Form.Label>
              <Form.Control type="text" placeholder="reading" />
            </Form.Group>
            <Form.Group controlId="habitUnits">
              <Form.Label>Unit of Measure</Form.Label>
              <Form.Control type="text" placeholder="chapters" />
            </Form.Group>
            <Form.Group controlId="habitIcon">
              <Form.Label>Icon</Form.Label>
              <IconsList />
            </Form.Group>
            <Form.Group controlId="habitColor">
              <Form.Label>Color</Form.Label>
              <SketchPicker />
            </Form.Group>
          </Form>
        </>}
        handleClose={togglePopup}
      />}

    </div>
  );
}

export default App;
