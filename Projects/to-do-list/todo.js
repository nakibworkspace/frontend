let tasks = [];  // array to hold tasks


//function to add a task
function addTask() {
  const taskInput = document.getElementById('taskInput'); // Should not be null if ID matches
  const taskText = taskInput.value.trim(); // Use .value, not .ariaValueMax
  if (taskText) {
    tasks.push({ text: taskText, completed: false }); // Add task object
    taskInput.value = ''; // Clear input
    displayTasks(); // Update the displayed tasks
  }
}


// function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList'); // taskList is the element where tasks will be displayed
    taskList.innerHTML = ''; // clear the current list
    tasks.forEach((task, index) => { // iterate over each task in the tasks array
        const li = document.createElement('li'); // create a new list item
        li.textContent = task; // set the text content to the task
        const deleteButton = document.createElement('button'); // create a delete button
        deleteButton.textContent = 'Delete'; // set button text
        deleteButton.onclick = () => { // set onclick event to remove the task
            tasks.splice(index, 1); // remove the task from the array
            displayTasks(); // update the displayed tasks
        };
        li.appendChild(deleteButton); // append the delete button to the list item
        taskList.appendChild(li); // append the list item to the task list
    });
}

// function to toggle task completion
function toggleTask() {
    tasks[index].completed = !tasks[index].completed; // toggle the completed status of the task
    displayTasks(); // update the displayed tasks
}

// function to remove a task
function removeTask(index) {
    tasks.splice(index,1); // remove the task at the specified index
    displayTasks(); // update the displayed tasks
}