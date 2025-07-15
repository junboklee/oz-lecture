const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const prioritySelect = document.getElementById("priority");

function updateTaskCount() {
    const count = taskList.children.length;
    taskCount.textContent = `현재 할 일 : ${count}개`;
}

function addTask() {
    const text = taskInput.Value.trim();
    const priority = prioritySelect.value;
}



