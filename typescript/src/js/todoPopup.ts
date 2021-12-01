let base: object = {};
let dateId: string;
type objType = {
  [key: number]: string;
};
let todoList: objType = {};
let counter: number = 0;

if (localStorage.getItem("nextId") === null) {
  localStorage.setItem("nextId", "0");
}

import { renderCalendar } from "./calendar";

export function todoOpen(e:any, date: Date): void {
  if (localStorage.todoActive == "false") {
    return;
  }
  todoList = {};
 const currentNumber: string = e.target.value;
  let currentDay: string = new Date(
    date.getFullYear(),
    date.getMonth(),
    +currentNumber
  ).toDateString();
  dateId = `${e.target.innerText}${date.getMonth()}${date.getFullYear()}`;
  const todoAddBtn: HTMLElement | null = document.querySelector(".todo__add-btn");
  const todoPopUpWrapper: HTMLElement | null = document.querySelector(".container__todo");
  const closeBtnTodo: HTMLElement | null = document.querySelector(".pop-up__close-btn_todo");
  const dateForTodo: HTMLElement | null = document.querySelector(".pop-up__nunber");
  if (!todoAddBtn || !todoPopUpWrapper || !closeBtnTodo || !dateForTodo) throw Error("root element not found");
  dateForTodo.innerText = currentDay;
  todoPopUpWrapper.classList.toggle("container__todo_close");
  closeBtnTodo.addEventListener("click", () => {
    todoPopUpWrapper.classList.add("container__todo_close");
  });

  const todoInput : HTMLElement | null= document.querySelector(".todo__input_text");
  if (!todoInput) throw Error("root element not found");
  todoAddBtn.addEventListener("click", (e: Event) => {
    addInList(todoInput);
    e.preventDefault();
  });
  drawList();
}

let addInList = function (todoInput: any): void {
  let value: string = todoInput.value;
  if (value === "") {
    return;
  }

  let nextId: number = JSON.parse(localStorage.nextId);

  if (localStorage.hasOwnProperty(dateId)) {
    todoList = JSON.parse(localStorage[dateId]);
  }

  todoList[nextId] = value;
  nextId++;
  localStorage.setItem(dateId, JSON.stringify(todoList));
  todoInput.value = "";
  localStorage.setItem("nextId", JSON.stringify(nextId));
  drawList();
  renderCalendar();
};

function drawList(): void {
  const todoWrapper: HTMLElement | null =
    document.querySelector(".todo__wrapper");
  if (!todoWrapper) throw Error("root element not found");
  todoWrapper.innerHTML = "";
  let totalTasks: HTMLElement | null = document.querySelector(".todo__counter");    
  if (!totalTasks) throw Error("root element not found");
  if (localStorage.hasOwnProperty(dateId)) {
    totalTasks.textContent = `${
      Object.keys(JSON.parse(localStorage[dateId])).length
    }`;
  } else {
    totalTasks.textContent = "0";
  }

  if (localStorage[dateId] != undefined) {
    for (let key in JSON.parse(`${localStorage[dateId]}`)) {
      const li: HTMLElement = document.createElement("li");
      li.className = "todo__task todo-task";
      const taskText: HTMLElement = document.createElement("div");
      taskText.className = "todo__task-text";
      taskText.textContent = JSON.parse(localStorage[dateId])[key];
      li.appendChild(taskText);      
      li.dataset.id  = key;
      const btn: HTMLElement = document.createElement("div");
      btn.className = "todo-task__del";
      const btnEdit: HTMLElement = document.createElement("div");
      btnEdit.className = "todo-task__edit";
      li.appendChild(btn);
      li.appendChild(btnEdit);

      btn.addEventListener("click", (e: Event) => {        
        todoWrapper.removeChild(li);
        let myStorage: objType = JSON.parse(localStorage[dateId]);
        if (li.dataset.id === undefined) {li.dataset.id = ''};
        delete myStorage[+li.dataset.id];
        localStorage[dateId] = JSON.stringify(myStorage);
        if (!totalTasks) throw Error("root element not found");
        totalTasks.textContent = `${
          Object.keys(JSON.parse(localStorage[dateId])).length
        }`;
        if (totalTasks.textContent == "0") {
          localStorage.removeItem(dateId);
          renderCalendar();
        }
      });
      btnEdit.addEventListener("click", (e: Event) => {
        e.stopPropagation();
        li.textContent = "";
        const taskEditor:HTMLInputElement = document.createElement("input");
        taskEditor.className = "todo-task__editor";
        taskEditor.type = "text";
        if (li.dataset.id === undefined) {li.dataset.id = ''};
        taskEditor.value = JSON.parse(localStorage[dateId])[li.dataset.id];
        taskEditor.dataset.id = li.dataset.id;
        const saveTask: HTMLElement = document.createElement("div");
        saveTask.className = "todo-task__save";
        li.appendChild(taskEditor);
        li.appendChild(saveTask);
        saveTask.addEventListener("click", (e: Event) => {
          const listEdit: objType = JSON.parse(localStorage[dateId]);          
          if (li.dataset.id === undefined) {li.dataset.id = ''};
          listEdit[+li.dataset.id] = taskEditor.value;
          if (taskEditor.value === "") {
            return;
          }
          localStorage.setItem(dateId, JSON.stringify(listEdit));
          drawList();
        });
      });
      li.addEventListener("click", (e: any) => {
        li.classList.toggle("todo-task_done");
      });

      todoWrapper.appendChild(li);
    }
  }
}
