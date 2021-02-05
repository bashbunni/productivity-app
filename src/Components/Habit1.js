import React from 'react';
import Nav from './Nav';
import myImg from '../styles/assets/d3-javascript-graphing-library.jpg';
import { habitList } from '../HabitList';

function Habit1() {
    return (
        <div className="Home">
            <Nav />
            <h1>Habit page 1</h1>
            <p>My goals are ... because I want to ... in ....</p>
            <p>My goals are to practice japanese every day because I want to become fluent in the next 5 years.</p>
            { // TODO: clean up this test area below
            }
            <div class="habitContainer">
                {habitList.map((habit, key) => {
                    return (
                        <div key={key}>
                            {habit.name +
                                ", " +
                                habit.uom}
                        </div>
                    );
                })}
            </div>
            <img src={myImg} />
        </div>

    );
}

export default Habit1;