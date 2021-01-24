import React, { useState } from 'react';
import Nav from '../Components/Nav';
import IconsList from '../Components/IconsList';
import Modal from 'react-awesome-modal';
import NewHabitForm from '../Habit';

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
            <Modal visible={visible} width="400" height="600px" effect="fadeInUp" onClickAway={closeModal}>
                <NewHabitForm />
            </Modal>
        </div>
    );
}

export default Home;