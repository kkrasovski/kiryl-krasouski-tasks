const settingsBtn = document.querySelector(".container__settings-btn");
const popUp = document.querySelector(".container__pop-up");
const todoPopUp = document.querySelector(".container__pop-up");
const calendar = document.querySelector(".container__calendar");

settingsBtn.addEventListener("click", popUpHandler);

export function popUpHandler() {
  popUp.classList.toggle("container__pop-up_close");
  calendar.classList.toggle("container__calendar_inactive");
}
