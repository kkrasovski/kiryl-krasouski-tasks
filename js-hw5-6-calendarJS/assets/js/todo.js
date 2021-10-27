let todoList = {
 
};
let currentValue= '';
let counter;
let singleTask = '';
let todoAddBtn = document.querySelector('.todo__add-btn');
let todoInput = document.querySelector('.todo__input_text');
let todoWrapper = document.querySelectorAll('.todo__section');

todoAddBtn.addEventListener('click', addInList)

function addInList(event) {  
  event.preventDefault()
  counter++;   
  todoList[counter] = currentValue;  
  todoInput.value = '';
 
for (key in todoList) {
singleTask += ` <div class="todo__task todo-task">
<div class="todo-task_box todo-task__done">
  <input class="task__ckeck" type="checkbox" name="do" id="do">
</div>
<label for="do" class="todo-task_box todo-task__name">${todoList[key]}</label>
<button class="todo-task_box todo-task__edit"></button>
<button class="todo-task_box todo-task__del"></button>
</div>`
}
console.log(singleTask)
todoWrapper[1].innerHTML = singleTask;

}

todoInput.addEventListener('change', (event) => {
currentValue = event.target.value;
console.log(currentValue)

  
})