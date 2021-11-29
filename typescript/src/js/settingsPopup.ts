const settingsBtn : HTMLElement | null = document.querySelector(".container__settings-btn");
const popUp : HTMLElement | null = document.querySelector(".container__pop-up");
const todoPopUp : HTMLElement | null = document.querySelector(".container__pop-up");
const calendar : HTMLElement | null = document.querySelector(".container__calendar");

if (!settingsBtn||!popUp||!todoPopUp||!calendar ) throw Error("root element not found");

settingsBtn.addEventListener("click", popUpHandler);

export function popUpHandler() {
  if (!popUp||!calendar) throw Error("root element not found");
  popUp.classList.toggle("container__pop-up_close");
  calendar.classList.toggle("container__calendar_inactive"); 
}
