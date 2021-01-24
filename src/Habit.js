import IconsList from './Components/IconsList';

class Habit {
    constructor(id, name, uom, icon, color) {
        this.id = id;
        this.name = name;
        this.uom = uom;
        this.icon = icon;
        this.color = color;
    }
}


function NewHabitForm() {
    const submitHabit = () => {
        console.log("submit button pressed");
    }

    return (
        <>
            <form id="newHabit">
                <div class="newHabitForm">
                    <label for="habitName">Habit Name</label>
                    <input type="text" name="habitName" required />
                </div>
                <div class="newHabitForm">
                    <label for="uom">Unit of Measure</label>
                    <input type="text" name="uom" required />
                </div>
                <div class="newHabitForm">
                    <label>Icon</label>
                    <IconsList />
                </div>
                <button class="submit-btn" onClick={submitHabit}>Submit</button>
            </form>
        </>
    );
}

export default NewHabitForm;