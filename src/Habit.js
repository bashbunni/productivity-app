import React, { Component } from 'react';
import IconsList from './Components/IconsList';

class Habit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            uom: '',
            icon: '',
            color: '',
            data: []
        };
        this.setName = this.setName.bind(this);
        this.setUom = this.setUom.bind(this);
        this.setIcon = this.setIcon.bind(this);
    }

    setName(event) {
        this.setState({ name: event.target.value });
    }

    setUom(event) {
        this.setState({ uom: event.target.value });
    }

    setIcon(event) {
        this.setState({ icon: event.target.value });
    }

    submitHabit() {
        alert("submitted! Here are the updated values: " + this.state.name + " measured in " + this.state.uom);
    }

    render() {
        return (
            <>
                <form id="newHabit" onSubmit={this.submitHabit}>
                    <h1>Track a new habit</h1>
                    <div class="newHabitForm">
                        <label for="habitName">Habit Name</label>
                        <input type="text" value={this.state.name} onChange={this.setName} name="name" required />

                        <label for="uom">Unit of Measure</label>
                        <input type="text" value={this.state.uom} onChange={this.setUom} name="uom" required />

                        <label>Icon</label>
                        <IconsList value={this.state.icon} onChange={this.setIcon} name="icon" />
                        <input class="submit-btn" type="submit" value="Submit" />
                    </div>
                </form>
                {
                    // TODO: don't forget to delete this line of code after testing
                }
                <p>{this.state.name + " measured in " + this.state.uom}</p>
                <p>for example, you can put Meditation for habit name, minutes as unit of measure.</p>
            </>
        );
    }
}

export default Habit;