document.addEventListener("DOMContentLoaded", () => {
    const journalForm = document.getElementById("journal-form");
    const journalInput = document.getElementById("journal-entry");
    const journalEntries = document.getElementById("journal-entries");

    // Save a new journal entry
    function saveEntry(entry) {
        const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
        entries.unshift(entry); // Add new entries to the top
        localStorage.setItem("journalEntries", JSON.stringify(entries));
    }

    // Load existing entries from localStorage
    function loadEntries() {
        const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
        journalEntries.innerHTML = entries
            .map(
                (entry, index) => `
                <div class="entry">
                    <p><strong>Entry ${index + 1}:</strong> ${entry}</p>
                    <button class="btn btn-danger" onclick="deleteEntry(${index})">Delete</button>
                </div>
            `
            )
            .join("");
    }

    // Delete a specific journal entry
    window.deleteEntry = (index) => {
        const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
        entries.splice(index, 1);
        localStorage.setItem("journalEntries", JSON.stringify(entries));
        loadEntries();
    };

    // Add a new journal entry
    journalForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const entry = journalInput.value.trim();
        if (entry) {
            saveEntry(entry);
            loadEntries();
            journalInput.value = ""; // Clear the textarea
        }
    });

    loadEntries(); // Load entries on page load
});
