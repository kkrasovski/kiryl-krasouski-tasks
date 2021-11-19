let base = {};
let dateId;
let todoList = {};
let counter = 0;
if (localStorage.getItem("nextId") === null) {
  localStorage.setItem("nextId", 0);
}
function todoOpen(e, date) {
  if (localStorage.todoActive === "false") {
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
  const popUpForm = document.querySelector(".pop-up__form");

  popUpForm.onsubmit = (e) => {
    addInList(todoInput);
    e.preventDefault();
   
  };
  drawList();
}

let addInList = function (todoInput) {
  let value = todoInput.value;
  if (value === "") {
    return;
  }
  let nextId = localStorage.getItem("nextId");
  if (localStorage.hasOwnProperty(dateId)) {
    todoList = JSON.parse(localStorage[dateId]);
  }
  todoList[nextId] = value;
  nextId++;
  localStorage.setItem(dateId, JSON.stringify(todoList));
  todoInput.value = "";
  localStorage.setItem("nextId", nextId);
  drawList();
  renderCalendar();
};

function drawList() {
  const todoWrapper = document.querySelector(".todo__wrapper");
  todoWrapper.innerHTML = "";
  const totalTasks = document.querySelector(".todo__counter");

  if (localStorage.hasOwnProperty(dateId)) {
    totalTasks.textContent = Object.keys(
      JSON.parse(localStorage.getItem(dateId))
    ).length;
  } else {
    totalTasks.textContent = 0;
  }

  for (key in JSON.parse(localStorage.getItem(dateId))) {
    const li = document.createElement("li");
    li.className = "todo__task todo-task";

    const taskText = document.createElement("div");
    taskText.className = "todo__task-text";
    taskText.textContent = JSON.parse(localStorage.getItem(dateId))[key];
    li.appendChild(taskText);
    li.dataset.id = key;
    const btn = document.createElement("div");
    btn.className = "todo-task__del";
    const btnEdit = document.createElement("div");
    btnEdit.className = "todo-task__edit";
    li.appendChild(btn);
    li.appendChild(btnEdit);

    btn.addEventListener("click", (e) => {
      todoWrapper.removeChild(li);
      let myStorage = JSON.parse(localStorage.getItem(dateId));
      delete myStorage[li.dataset.id];
      localStorage[dateId] = JSON.stringify(myStorage);
      totalTasks.textContent = Object.keys(
        JSON.parse(localStorage.getItem(dateId))
      ).length; 
     
      if (totalTasks.textContent === "0") {
        localStorage.removeItem(dateId);
        renderCalendar();
      }
      
    });

    btnEdit.addEventListener("click", (e) => {
      e.stopPropagation();
      li.textContent = "";
      const taskEditor = document.createElement("input");
      taskEditor.className = "todo-task__editor";
      taskEditor.type = "text";
      taskEditor.value = JSON.parse(localStorage.getItem(dateId))[
        li.dataset.id
      ];
      taskEditor.dataset.id = li.dataset.id;
      const saveTask = document.createElement("div");
      saveTask.className = "todo-task__save";
      li.appendChild(taskEditor);
      li.appendChild(saveTask);

      saveTask.addEventListener("click", () => {
        const listEdit = JSON.parse(localStorage.getItem(dateId));
        if (!taskEditor.value) {
          return;
        }
        listEdit[li.dataset.id] = taskEditor.value;
        localStorage.setItem(dateId, JSON.stringify(listEdit));
        drawList();
      });
    });
    li.addEventListener("click", (e) => {
      li.classList.toggle("todo-task_done");
    });

    todoWrapper.appendChild(li);
  }
}
