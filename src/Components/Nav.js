import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Link } from 'react-router-dom';
import Habit1 from '../Pages/Habit1';
import Home from '../Pages/Home';

class Nav extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav className="sidebar" >
                    <Link to="/" component={Home}>
                        <button className="nav-btn" id="home"><FontAwesomeIcon icon={["fas", "igloo"]} />
                            <p className="nav-text">Home</p>
                        </button>
                    </Link>
                    <Link to="habit1" component={Habit1}>
                        <button className="nav-btn" id="slack"><FontAwesomeIcon icon={["fab", "slack-hash"]} />
                            <p className="nav-text">Habit1</p>
                        </button>
                    </Link>
                    <Link to="habit1" component={Habit1}>
                        <button className="nav-btn" id="gmail"><FontAwesomeIcon icon={["far", "envelope"]} />
                            <p className="nav-text">Habit2</p>
                        </button>
                    </Link>>
                    <button className="nav-btn" id="add" onClick={this.props.openModal}><FontAwesomeIcon icon={["fas", "plus-circle"]} />
                        <p className="nav-text">New</p>
                    </button>
                </nav>
            </BrowserRouter>
        );
    }
}

export default Nav; 