import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * This component is a reusable popup component where the contents are relayed using props
 * @param {} props The Popup content
 */
function Popup(props) {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
};

export default Popup;