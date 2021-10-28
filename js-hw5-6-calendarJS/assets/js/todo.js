

let todoAddBtn = document.querySelector('.todo__add-btn');
let todoInput = document.querySelector('.todo__input_text');
let todoWrapper = document.querySelector('.todo__wrapper');
let delBtn = document.querySelector('.todo-task__del');
let totalTasks = document.querySelector('.todo__total');
let counter = 0;
todoAddBtn.addEventListener('click', (e) => {  
  addInList(todoInput.value)  
  todoInput.value = '';
 e.preventDefault()
})

function addInList(value) {   
  counter++;

const li = document.createElement('li');
li.className = 'todo__task todo-task';
li.textContent = value;

const btn = document.createElement('li')
btn.className = 'todo-task__del';
li.appendChild(btn);


btn.addEventListener('click', (e) => {  
  todoWrapper.removeChild(li);
  counter--;
  totalTasks.textContent = counter;
})

li.addEventListener('click', (e) => {
  li.classList.toggle('todo-task_done');


 
})
totalTasks.textContent = counter
todoWrapper.appendChild(li);
}



  
