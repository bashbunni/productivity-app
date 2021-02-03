import React, { useState } from 'react';
import Nav from '../Components/Nav';
import IconsList from '../Components/IconsList';
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