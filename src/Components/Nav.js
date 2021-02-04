import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Habit1 from './Habit1';

class Nav extends Component {
    render() {
        return (
            <nav className="sidebar" >
                <Link to="/">
                    <button className="nav-btn" id="home"><FontAwesomeIcon icon={["fas", "igloo"]} />
                        <p className="nav-text">Home</p>
                    </button>
                </Link>
                <Link to="/habit1">
                    <button className="nav-btn" id="slack"><FontAwesomeIcon icon={["fab", "slack-hash"]} />
                        <p className="nav-text">Habit1</p>
                    </button>
                </Link>
                <Link to="/habit1">
                    <button className="nav-btn" id="gmail"><FontAwesomeIcon icon={["far", "envelope"]} />
                        <p className="nav-text">Habit2</p>
                    </button>
                </Link>
                <Link to="/newhabit">
                    <button className="nav-btn" id="add" onClick={this.props.toggleModal}><FontAwesomeIcon icon={["fas", "plus-circle"]} />
                        <p className="nav-text">New</p>
                    </button>
                </Link>
            </nav>
        );
    }
}

export default Nav; 