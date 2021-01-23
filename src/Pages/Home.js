import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Popup from '../Components/Popup';
import IconsList from '../Components/IconsList';
import Modal from 'react-awesome-modal';
import { SketchPicker } from 'react-color';

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
            <Nav openPopup={openModal} />
            <Modal visible={visible} width="400" height="300" effect="fadeInUp" onClickAway={closeModal}>
                <>
                    <form>
                        <div class="newHabitForm">
                            <label for="habitName">Habit Name</label>
                            <input type="text" id="habitName" required />
                        </div>
                        <div class="newHabitForm">
                            <label for="uom">Unit of Measure</label>
                            <input type="text" id="uom" required />
                        </div>
                        <div class="newHabitForm">
                            <label>Icon</label>
                            <IconsList />
                        </div>
                        <div class="newHabitForm">
                            <label>Color</label>
                            <SketchPicker />
                        </div>
                        <button class="submit-btn">Submit</button>
                    </form>
                </>
            </Modal>
        </div>
    );
}

export default Home;