import React, { Component, useState } from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewHabitForm from './Habit';
import Modal from 'react-awesome-modal';
import Nav from './Components/Nav';
import Habit1 from './Components/Habit1';
import './styles/App.css';

class App extends Component {
    state = { visible: false }

    openModal() {
        this.setState({ visible: true });
    }

    closeModal() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <Router>
                <div className="Home">
                    <Nav openModal={this.openModal} />
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/habit1" element={<Habit1 />} />
                            <Route exact path="/newhabit" element={<NewHabitForm />} />
                        </Routes>
                    </div>
                    <Modal visible={this.visible} width="400" height="600px" effect="fadeInUp" onClickAway={this.closeModal}>
                        <NewHabitForm />
                    </Modal>
                </div>
            </Router>
        );
    }
}

export default App;