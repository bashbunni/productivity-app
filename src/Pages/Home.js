import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Modal from 'react-awesome-modal';
import NewHabitForm from '../Habit';
import { Route } from 'react-router-dom';

function Home() {
    const [visible, setVisibility] = useState(false);


    const openModal = () => {
        setVisibility(true);
    }

    const closeModal = () => {
        setVisibility(false);
    }

    return (
        <div className="Home">
            <Nav openModal={openModal} />
            <h1>Welcome to the home page</h1>
            <Modal visible={visible} width="400" height="600px" effect="fadeInUp" onClickAway={closeModal}>
                <NewHabitForm />
            </Modal>
        </div>

    );
}

export default Home;