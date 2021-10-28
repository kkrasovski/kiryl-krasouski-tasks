let todoAddBtn = document.querySelector(".todo__add-btn");
let todoInput = document.querySelector(".todo__input_text");
let todoWrapper = document.querySelector(".todo__wrapper");
let delBtn = document.querySelector(".todo-task__del");
let totalTasks = document.querySelector(".todo__counter");
console.log(totalTasks);
let counter = 0;
let todoList = {};
todoAddBtn.addEventListener("click", (e) => {
  addInList(todoInput.value);
  todoInput.value = "";
  e.preventDefault();
});

function addInList(value) {
  counter++;
  todoList[counter] = value;
 
  console.log(todoList);

  todoWrapper.innerHTML = "";
  for (key in todoList) {
    console.log(key);
    const li = document.createElement("li");
    li.className = "todo__task todo-task";
    li.textContent = todoList[key];
    const btn = document.createElement("div");
    btn.className = "todo-task__del";
    li.appendChild(btn);

    btn.addEventListener("click", (e) => {
      console.log(e)
      console.log(this)
      console.log(counter)
      todoWrapper.removeChild(li);
      counter--;
      totalTasks.textContent = counter;
      todoList[counter];
    });

    li.addEventListener("click", (e) => {
      li.classList.toggle("todo-task_done");
    });
    totalTasks.textContent = counter;
    todoWrapper.appendChild(li);
  }
}
