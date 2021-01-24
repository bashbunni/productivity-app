import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Nav extends Component {
    render() {
        return (
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
                <button className="nav-btn" id="add" onClick={this.props.openModal}><FontAwesomeIcon icon={["fas", "plus-circle"]} />
                    <p className="nav-text">New</p>
                </button>
            </nav>
        );
    }
}

export default Nav; 