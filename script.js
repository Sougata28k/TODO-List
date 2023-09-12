// public/script.js

    const currentDate = new Date();
    
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();

    const formattedDate = `${month}.${day}.${year}`;

    document.getElementById("current-date").textContent = `${formattedDate}`;


document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');

    function createListItem(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task">${taskText}</span>
            <button class="delete-button" style="background-color: #ff6347; color: #fff; border: none; padding: 5px 10px; cursor: pointer;border-radius:10px; box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);">Delete</button>
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
