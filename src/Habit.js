import React, { Component, useState } from 'react';
import IconsList from './Components/IconsList';

const Habit = (props) => {
    const [name, setName] = useState('');
    const [uom, setUom] = useState('');
    const [icon, setIcon] = useState('');

    return (
        <>
            <form id="newHabit">
                <h1>Track a new habit</h1>
                <div class="newHabitForm">
                    <label for="habitName">Habit Name</label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" required />

                    <label for="uom">Unit of Measure</label>
                    <input type="text" value={uom} onChange={(e) => { setUom(e.target.value) }} name="uom" required />

                    <label>Icon</label>
                    <IconsList value={icon} onChange={(e) => { setIcon(e.target.value) }} name="icon" />
                    <input class="submit-btn" type="submit" value="Submit" />
                </div>
            </form>
            {
                // TODO: don't forget to delete this line of code after testing
            }
            <p>{name + " measured in " + uom}</p>
            <p>for example, you can put Meditation for habit name, minutes as unit of measure.</p>
        </>
    );
}

export default Habit;
