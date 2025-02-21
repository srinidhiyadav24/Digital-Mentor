document.addEventListener("DOMContentLoaded", () => {
    // Load stored habits on page load
    loadHabits();
});

// Add a new habit
function addHabit(event) {
    event.preventDefault();

    const habitName = document.getElementById("habitName").value;
    const habitFrequency = document.getElementById("habitFrequency").value;
    const habitReminder = document.getElementById("habitReminder").value;

    const habit = {
        name: habitName,
        frequency: habitFrequency,
        reminder: habitReminder,
        status: "Incomplete",
    };

    // Save habit to localStorage
    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits.push(habit);
    localStorage.setItem("habits", JSON.stringify(habits));

    // Refresh habit list
    loadHabits();

    // Reset form
    document.getElementById("habitForm").reset();
}

// Load habits from localStorage
function loadHabits() {
    const habits = JSON.parse(localStorage.getItem("habits")) || [];
    const habitTable = document.getElementById("habitTable");
    habitTable.innerHTML = ""; // Clear existing table rows

    habits.forEach((habit, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${habit.name}</td>
            <td>${habit.frequency}</td>
            <td>${habit.reminder}</td>
            <td>${habit.status}</td>
            <td>
                <button onclick="markComplete(${index})" class="btn">Complete</button>
                <button onclick="deleteHabit(${index})" class="btn btn-danger">Delete</button>
            </td>
        `;

        habitTable.appendChild(row);
    });
}

// Mark habit as complete
function markComplete(index) {
    const habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits[index].status = "Complete";
    localStorage.setItem("habits", JSON.stringify(habits));
    loadHabits();
}

// Delete habit
function deleteHabit(index) {
    const habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits.splice(index, 1);
    localStorage.setItem("habits", JSON.stringify(habits));
    loadHabits();
}
