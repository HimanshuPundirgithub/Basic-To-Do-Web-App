// script.js

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const pendingTasksList = document.getElementById("pending-tasks");
const completedTasksList = document.getElementById("completed-tasks");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const taskItem = createTaskItem(taskText);

    pendingTasksList.appendChild(taskItem);
    taskInput.value = "";
}

function createTaskItem(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", () => markAsComplete(li));

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => editTask(li));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => deleteTask(li));

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    return li;
}

function markAsComplete(taskItem) {
    taskItem.querySelector(".complete-btn").remove();
    completedTasksList.appendChild(taskItem);
}

function editTask(taskItem) {
    const span = taskItem.querySelector("span");
    const newTaskText = prompt("Edit your task:", span.textContent);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        span.textContent = newTaskText.trim();
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
