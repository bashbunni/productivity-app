import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * This component is a reusable popup component where the contents are relayed using props
 * @param {} props The Popup content
 */
class Popup extends Component {
    constructor(props) {
        super(props)
        this.setState = { isOpen: false }
    }

    togglePopup() {
        this.setState({ isOpen: this.props.isOpen })
    }

    render() {
        return (
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick={this.togglePopup}>x</span>
                    {this.props.content}
                </div>
            </div>
        );
    }
};

export default Popup;