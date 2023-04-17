// Selecionar os elementos HTML
const newTaskInput = document.getElementById('input-new-task');
const addTaskButton = document.getElementById('btn-new-task');
const toDoList = document.getElementById('to-do-list');

let tasks = [];

function addTask() {

  const newTask = newTaskInput.value;

  if (newTask === '') {
    alert('Você não pode adicionar uma tarefa vazia!');
    return;
  }

  tasks.push(newTask);

  newTaskInput.value = '';

  updateTaskList();
}

function updateTaskList() {

  toDoList.innerHTML = '';


  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

  
    const taskItem = document.createElement('li');

    taskItem.innerText = task;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.addEventListener('click', () => {
      deleteTask(i);
    });
    taskItem.appendChild(deleteButton);

    toDoList.appendChild(taskItem);
  }
}

function deleteTask(index) {

  tasks.splice(index, 1);

  updateTaskList();
}

addTaskButton.addEventListener('click', addTask);
