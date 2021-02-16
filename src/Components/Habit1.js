import React from 'react';
import Nav from './Nav';
import myImg from '../styles/assets/d3-javascript-graphing-library.jpg';
import CalendarHeatmap from 'react-calendar-heatmap';

function Habit1() {
    return (
        <div className="Home">
            <Nav />
            <h1>Habit page 1</h1>
            <p>My goals are ... because I want to ... in ....</p>
            <p>My goals are to practice japanese every day because I want to become fluent in the next 5 years.</p>
            <div >
                <CalendarHeatmap
                    startDate={new Date('2016-01-01')}
                    endDate={new Date('2016-12-31')}
                    values={[
                        { date: '2016-01-01', count: 12 },
                        { date: '2016-01-22', count: 122 },
                        { date: '2016-01-30', count: 38 },   // ...and so on
                    ]}
                />
            </div>
            <img src={myImg} alt="sample data" />
        </div>
    );
}

export default Habit1;