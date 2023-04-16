// Selecionar os elementos HTML
const newTaskInput = document.getElementById('input-new-task');
const addTaskButton = document.getElementById('btn-new-task');
const toDoList = document.getElementById('to-do-list');

// Criar um array para armazenar as tarefas
let tasks = [];

// Adicionar uma tarefa à lista
function addTask() {
  // Obter o valor do input
  const newTask = newTaskInput.value;

  // Verificar se o campo de adicionar tarefa está vazio
  if (newTask === '') {
    alert('Você não pode adicionar uma tarefa vazia!');
    return;
  }

  // Adicionar a tarefa ao array
  tasks.push(newTask);

  // Limpar o valor do input
  newTaskInput.value = '';

  // Atualizar a lista de tarefas
  updateTaskList();
}

// Atualizar a lista de tarefas
function updateTaskList() {
  // Limpar a lista de tarefas existentes
  toDoList.innerHTML = '';

  // Adicionar cada tarefa ao HTML
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    // Criar um elemento <li> para a tarefa
    const taskItem = document.createElement('li');

    // Adicionar o texto da tarefa ao elemento <li>
    taskItem.innerText = task;

    // Adicionar um botão de exclusão à tarefa
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.addEventListener('click', () => {
      deleteTask(i);
    });
    taskItem.appendChild(deleteButton);

    // Adicionar o elemento <li> à lista de tarefas
    toDoList.appendChild(taskItem);
  }
}

// Excluir uma tarefa da lista
function deleteTask(index) {
  // Remover a tarefa do array
  tasks.splice(index, 1);

  // Atualizar a lista de tarefas
  updateTaskList();
}

// Adicionar um listener de evento para o botão de adicionar tarefa
addTaskButton.addEventListener('click', addTask);
