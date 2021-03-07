import React from 'react';
import Nav from './Nav';
import CalendarHeatmap from 'react-calendar-heatmap';

function Habit1(props) {
    let currDate = new Date();
    let oneYearAgo = new Date().setFullYear(currDate.getFullYear() - 1);

    const habits = props.habitList;
    console.log(oneYearAgo.toString());
    return (
        <div className="Home">
            <Nav />
            <h1>Habit page 1</h1>
            <p>My goals are ... because I want to ... in ....</p>
            <p>My goals are to practice japanese every day because I want to become fluent in the next 5 years.</p>
            <div>
                <CalendarHeatmap
                    startDate={oneYearAgo} // TODO: Get date dynamically to be 1yr less than today's date
                    endDate={currDate}
                    values={[
                        { date: '2016-01-01', count: 12 },
                        { date: '2016-01-22', count: 122 },
                        { date: '2016-01-30', count: 38 }, // ...and so on
                    ]}
                />
            </div>
        </div>
    );
}

export default Habit1;
