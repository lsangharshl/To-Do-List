let selectedPriority = "low"; // Default priority

function setPriority() {
    selectedPriority = prompt("Set Priority (low/medium/high):") || "low";
    selectedPriority = selectedPriority.toLowerCase();

    if (!["low", "medium", "high"].includes(selectedPriority)) {
        alert("Invalid priority. Defaulting to low.");
        selectedPriority = "low";
    }
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = `
            ${taskInput.value}
            <span class="edit-btn" onclick="editTask(this)">Edit</span>
            <span class="delete-btn" onclick="deleteTask(this)">Delete</span>
            <span class="priority-badge ${selectedPriority}">${selectedPriority}</span>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(element) {
    element.parentElement.remove();
}

function editTask(element) {
    var taskText = element.parentElement.firstChild.nodeValue.trim();
    var newTaskText = prompt("Edit task:", taskText);

    if (newTaskText !== null && newTaskText.trim() !== "") {
        element.parentElement.firstChild.nodeValue = newTaskText;
    }
}
