import React, { useState } from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Habit from './Habit';
import Nav from './Components/Nav';
import Habit1 from './Components/Habit1';
import './styles/App.css';

const App = () => {
    const [visible, isVisible] = useState(false);

    const [habitList, setHabitList] = useState([]); // stores habits

    const addHabit = (habitObj) => {
        setHabitList([...habitList, habitObj]);
    }
    console.log(habitList);
    // concrete and glass; they are made of sand, skyscrapers are just big sand castles
    return (
        <Router>
            <div className="Home">
                <Nav openModal={() => isVisible(true)} habitList={habitList} />
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/habit1" element={<Habit1 habitList={habitList} />} />
                        <Route exact path="/newhabit" element={<Habit addHabit={addHabit} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
