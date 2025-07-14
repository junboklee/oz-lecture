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
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (text === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  // 우선순위에 따라 색상 적용
  if (priority === "high") {
    span.classList.add("high-priority");
  }

  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.className = "delete-button";

  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
    updateTaskCount();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  updateTaskCount();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

clearButton.addEventListener("click", function () {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  updateTaskCount();
});

updateTaskCount();
