let base = {};
let dateId;
let todoList = {};
function todoOpen(e, date) {
  todoList = {}
  let currentDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    e.target.innerText
  ).toDateString();
  dateId = `${e.target.innerText}${date.getMonth()}${date.getFullYear()}`;  
  let todoAddBtn = document.querySelector(".todo__add-btn");
  let todoPopUpWrapper = document.querySelector(".container__todo");
  let closeBtnTodo = document.querySelector(".pop-up__close-btn_todo");
  let dateForTodo = document.querySelector(".pop-up__nunber");

  dateForTodo.innerText = currentDay;
  todoPopUpWrapper.classList.toggle("container__todo_close");
  closeBtnTodo.addEventListener("click", () => {
    todoPopUpWrapper.classList.add("container__todo_close");
  });

  let todoInput = document.querySelector(".todo__input_text");

  // todoAddBtn.addEventListener("click", (e) => {
  //   //console.log(todoInput.value)
  //   let todoInput = document.querySelector(".todo__input_text");
  //   addInList;
  //   //console.log('после функции')
  //  // todoInput.value = "";
  //  console.log(dateId)
  //   e.preventDefault()

  // });
  todoAddBtn.addEventListener("click", () => {addInList(todoInput)});
  drawList()
}




let addInList = function (todoInput) {  
  
  let value = todoInput.value;
  if (value === "") {
    return;
  }
  counter++; 
  todoList[counter] = value;
  //localStorage[dateId] = todoList;
  localStorage.setItem(dateId, JSON.stringify(todoList))
  //console.log(localStorage)
  todoInput.value = "";

 // console.log()
 // console.log(dateId)
  //console.log(base);
 // console.log()
 // drawList(base)
  drawList()
};

function drawList() {
 // console.log(localStorage);
  //console.log(dateId)
  let todoWrapper = document.querySelector(".todo__wrapper");
   todoWrapper.innerHTML = "";
  let totalTasks = document.querySelector(".todo__counter");
  //if (base[dateId]) {
  if (localStorage.hasOwnProperty(dateId)) {
    console.log(localStorage)
    console.log(localStorage.getItem(dateId))
    totalTasks.textContent = Object.keys(localStorage.getItem(dateId)).length;

  } else {
    totalTasks.textContent = '0';
  }
//console.log(JSON.parse (localStorage.getItem(dateId)))
  for (key in JSON.parse (localStorage.getItem(dateId))) {
    
    const li = document.createElement("li");
    li.className = "todo__task todo-task";
    //li.textContent = localStorage[dateId][key];
    
    
    li.textContent = JSON.parse(localStorage.getItem(dateId))[key].length
   
    li.dataset.id = key;
    const btn = document.createElement("div");
    btn.className = "todo-task__del";
    li.appendChild(btn);




    btn.addEventListener("click", (e) => {
      todoWrapper.removeChild(li);
      // delete localStorage[dateId][li.dataset.id];
      //localStorage.removeItem([dateId][li.dataset.id])
      let myStorage = JSON.parse(localStorage.getItem(dateId)); 
      console.log(myStorage)
      console.log(li.dataset.id)
      console.log(dateId);      
      delete myStorage[li.dataset.id];
      console.log(myStorage)
      localStorage[dateId] = JSON.stringify(myStorage);





    //  console.log(localStorage);
      totalTasks.textContent = Object.keys(localStorage[dateId]).length;
    });

    li.addEventListener("click", (e) => {
      li.classList.toggle("todo-task_done");
    });

    
    todoWrapper.appendChild(li);
  }
}