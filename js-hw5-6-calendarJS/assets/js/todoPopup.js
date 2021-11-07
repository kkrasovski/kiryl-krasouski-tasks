let base = {};
let dateId;
let todoList = {};
let counter = 0;
function todoOpen(e, date) {
  if (localStorage.todoActive == "false") {
    return;
  }
  todoList = {};
  let currentDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    e.target.innerText
  ).toDateString();
  dateId = `${e.target.innerText}${date.getMonth()}${date.getFullYear()}`;
  const todoAddBtn = document.querySelector(".todo__add-btn");
  const todoPopUpWrapper = document.querySelector(".container__todo");
  const closeBtnTodo = document.querySelector(".pop-up__close-btn_todo");
  const dateForTodo = document.querySelector(".pop-up__nunber");

  dateForTodo.innerText = currentDay;
  todoPopUpWrapper.classList.toggle("container__todo_close");
  closeBtnTodo.addEventListener("click", () => {
    todoPopUpWrapper.classList.add("container__todo_close");
  });

  const todoInput = document.querySelector(".todo__input_text");
  todoAddBtn.addEventListener("click", (e) => {
    addInList(todoInput);
    e.preventDefault();
  });
  drawList();
}

let addInList = function (todoInput) {
  let value = todoInput.value;
  if (value === "") {
    return;
  }
  counter++;
  todoList[counter] = value;
  localStorage.setItem(dateId, JSON.stringify(todoList));
  todoInput.value = "";
  drawList();
  calendarGrid.innerHTML = "";
        renderCalendar();
};

function drawList() {
  const todoWrapper = document.querySelector(".todo__wrapper");
  todoWrapper.innerHTML = "";
  const totalTasks = document.querySelector(".todo__counter");

  if (localStorage.hasOwnProperty(dateId)) {
    console.log(localStorage);    
    totalTasks.textContent = Object.keys(
      JSON.parse(localStorage.getItem(dateId))
    ).length;
  } else {
    totalTasks.textContent = "0";
  }

  for (key in JSON.parse(localStorage.getItem(dateId))) {
    const li = document.createElement("li");
    li.className = "todo__task todo-task";
    li.textContent = JSON.parse(localStorage.getItem(dateId))[key];
    li.dataset.id = key;
    const btn = document.createElement("div");
    btn.className = "todo-task__del";
    li.appendChild(btn);
    
    btn.addEventListener("click", (e) => {
      todoWrapper.removeChild(li);
      let myStorage = JSON.parse(localStorage.getItem(dateId));
      console.log(myStorage)
      console.log(localStorage)
      delete myStorage[li.dataset.id];
      localStorage[dateId] = JSON.stringify(myStorage);
      totalTasks.textContent = Object.keys(
        JSON.parse(localStorage.getItem(dateId))
      ).length;
      if (totalTasks.textContent == 0) {
        localStorage.removeItem(dateId);
        calendarGrid.innerHTML = "";
        renderCalendar();
      }
    });
    li.addEventListener("click", (e) => {
      li.classList.toggle("todo-task_done");
    });

    todoWrapper.appendChild(li);
  }
}
