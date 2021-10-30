let base = {};
let dateId;
function todoOpen(e, date) {
  let currentDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    e.target.innerText
  ).toDateString();
  dateId = `${e.target.innerText}${date.getMonth()}${date.getFullYear()}`;
  //console.log(dateId)

  let todoPopUpWrapper = document.querySelector(".container__todo");
  let closeBtnTodo = document.querySelector(".pop-up__close-btn_todo");
  let dateForTodo = document.querySelector(".pop-up__nunber");

  dateForTodo.innerText = currentDay;
  todoPopUpWrapper.classList.toggle("container__todo_close");
  closeBtnTodo.addEventListener("click", () => {
    todoPopUpWrapper.classList.add("container__todo_close");
  });

  let todoAddBtn = document.querySelector(".todo__add-btn");

  //let todoInput = document.querySelector(".todo__input_text");

  // todoAddBtn.addEventListener("click", (e) => {
  //   //console.log(todoInput.value)
  //   let todoInput = document.querySelector(".todo__input_text");
  //   addInList;
  //   //console.log('после функции')
  //  // todoInput.value = "";
  //  console.log(dateId)
  //   e.preventDefault()

  // });
  todoAddBtn.addEventListener("click", addInList);
}

let addInList = function () {
  let todoInput = document.querySelector(".todo__input_text");
  let value = todoInput.value;
  //console.log(dateId)

  let todoWrapper = document.querySelector(".todo__wrapper");
  let totalTasks = document.querySelector(".todo__counter");

  if (value === "") {
    return;
  }
  counter++;
  console.log(dateId);

  todoList[counter] = value;
  base[dateId] = todoList;
  todoInput.value = "";
  console.log(base);

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
      console.log(base);
      totalTasks.textContent = Object.keys(todoList).length;
    });

    li.addEventListener("click", (e) => {
      li.classList.toggle("todo-task_done");
    });

    totalTasks.textContent = Object.keys(todoList).length;
    todoWrapper.appendChild(li);
  }
};
