function todoOpen(e) {  
  let todoPopUpWrapper = document.querySelector(".container__todo");
  let closeBtnTodo = document.querySelector(".pop-up__close-btn_todo");
  let dateForTodo = document.querySelector(".pop-up__nunber");
  console.log(e.target.innerText)  
  dateForTodo.innerText = e.target.innerText;

  closeBtnTodo.addEventListener("click", () => {
    todoOpen(e);
  });
  todoPopUpWrapper.classList.toggle("container__todo_close");
}
