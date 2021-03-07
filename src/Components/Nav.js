import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = (props) => {
	console.log(props.habitList);
 /*	let habits = props.habitList.map((habit, index) => {
	<Link to="/{habit.name}">
            <button className="nav-btn" id="{habit.name}"><FontAwesomeIcon icon={["fab", "slack-hash"]} />
                <p className="nav-text"></p>
            </button>
        </Link>
    }) */
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
            <Link to="/newhabit" >
                <button className="nav-btn" id="gmail"><FontAwesomeIcon icon={["far", "plus-square"]} />
                    <p className="nav-text">Add</p>
                </button>
            </Link>
        </nav>
    );
}
export default Nav;
