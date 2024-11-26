const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Add event listener for adding a task
addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');

        // Create the task text
        const span = document.createElement('span');
        span.textContent = taskText;

        // Add a "complete" button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Add a "delete" button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append elements to the list item
        li.appendChild(span);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
});