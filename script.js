// public/script.js
document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');

    function createListItem(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task">${taskText}</span>
            <button class="delete-button">Delete</button>
        `;

        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });

        return listItem;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = createListItem(taskText);
            todoList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
