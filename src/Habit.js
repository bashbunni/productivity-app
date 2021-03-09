import React, { useState } from 'react';

const Habit = (props) => {

    const [habit, setHabit] = useState({ name: '', uom: '', data: [] }); // [Date obj, amt]

    const handleInput = (e) => {
        setHabit({ ...habit, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault(); // prevent default submission
        console.log(habit);
        let habitJson = JSON.stringify(habit);
        console.log(habitJson);
        props.addHabit(habit);
    }

    return (
        <>
            <form id="newHabit" onSubmit={onSubmit}>
                <h1>Track a new habit</h1>
                <div className="newHabitForm">
                    <label htmlFor="habitName">Habit Name</label>
                    <input type="text" value={habit.name} onChange={handleInput} name="name" required />
                    <label htmlFor="uom">Unit of Measure</label>
                    <input type="text" value={habit.uom} onChange={handleInput} name="uom" required />

                    <input className="submit-btn" type="submit" value="Submit" />
                </div>
            </form>
            <p>{habit.name + " measured in " + habit.uom}</p>
            <p>for example, you can put Meditation for habit name, minutes as unit of measure.</p>
        </>
    );
}

export default Habit;
