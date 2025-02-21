document.addEventListener("DOMContentLoaded", () => {
    const statsContainer = document.getElementById("progress-stats");

    // Example data for progress
    const progressData = {
        tasksCompleted: 0,
        goalsAchieved: 0,
        badgesEarned:0,
    };

    function renderProgress() {
        statsContainer.innerHTML = `
            <div class="stat">
                <h2>Tasks Completed</h2>
                <div class="stat-number">${progressData.tasksCompleted}</div>
            </div>
            <div class="stat">
                <h2>Goals Achieved</h2>
                <div class="stat-number">${progressData.goalsAchieved}</div>
            </div>
            <div class="stat">
                <h2>Badges Earned</h2>
                <div class="stat-number">${progressData.badgesEarned}</div>
            </div>
        `;
    }

    renderProgress();
});
