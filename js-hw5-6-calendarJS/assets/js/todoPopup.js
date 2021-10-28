function todoOpen() {
  let todoPopUpWrapper = document.querySelector(".container__todo");
  let closeBtnTodo = document.querySelector(".pop-up__close-btn_todo");
  closeBtnTodo.addEventListener("click", () => {
    todoOpen();
  });
  todoPopUpWrapper.classList.toggle("container__todo_close");
}
