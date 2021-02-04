import React, { useState } from 'react';
import Nav from './Nav';
import IconsList from './IconsList';
import Modal from 'react-awesome-modal';
import NewHabitForm from '../Habit';


function Habit1() {
    return (
        <div className="Home">
            <Nav />
            <h1>Habit page 1</h1>
        </div>
    );
}

export default Habit1;