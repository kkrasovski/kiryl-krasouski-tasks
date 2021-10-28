let todoAddBtn = document.querySelector(".todo__add-btn");
let todoInput = document.querySelector(".todo__input_text");
let todoWrapper = document.querySelector(".todo__wrapper");
let delBtn = document.querySelector(".todo-task__del");
let totalTasks = document.querySelector(".todo__counter");

let todoList = {};
let counter = 0;

todoAddBtn.addEventListener("click", (e) => {
  addInList(todoInput.value);
  todoInput.value = "";
  e.preventDefault();
});

function addInList(value) {
  if (value === "") {
    return;
  }
  counter++;
  todoList[counter] = value;

  todoWrapper.innerHTML = "";
  for (key in todoList) {
    const li = document.createElement("li");
    li.className = "todo__task todo-task";
    li.textContent = todoList[key];
    li.dataset.id = key;
    const btn = document.createElement("div");
    btn.className = "todo-task__del";
    li.appendChild(btn);

    btn.addEventListener("click", (e) => {
      todoWrapper.removeChild(li);      
      delete todoList[li.dataset.id];
      totalTasks.textContent =  Object.keys(todoList).length;
    });

    li.addEventListener("click", (e) => {
      li.classList.toggle("todo-task_done");
    });

    totalTasks.textContent = Object.keys(todoList).length;
    todoWrapper.appendChild(li);
  }
}
