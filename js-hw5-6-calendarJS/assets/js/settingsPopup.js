let settingsBtn = document.querySelector(".container__settings-btn");
let popUp = document.querySelector(".container__pop-up");
let todoPopUp = document.querySelector(".container__pop-up");
let calendar = document.querySelector(".container__calendar");

settingsBtn.addEventListener("click", popUpHandler);
closeBtn.addEventListener("click", popUpHandler);


function popUpHandler() {
  popUp.classList.toggle("container__pop-up_close");
  calendar.classList.toggle("container__calendar_inactive");
}
