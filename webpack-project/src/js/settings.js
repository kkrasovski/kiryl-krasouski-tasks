import { popUpHandler } from "./settingsPopup";
import { renderCalendar } from "./calendar";

// SETTINGS
const daysLabelsMon = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const daysLabelsSun = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let firstWeekDayHandler = document.querySelector('[name="first-day"]');

// settings for first day of the week
function selectFirstDay() {
  let firstWeekDay =
    firstWeekDayHandler.options[firstWeekDayHandler.selectedIndex].value;
  localStorage.setItem("firstWeekDay", firstWeekDay);
  setFirstDay();
}

// draw names of the day
function setFirstDay() {
  const daysOfWeek = document.querySelector(".calendar__days");
  let daysNames = "";
  if (localStorage.firstWeekDay == "sun") {
    for (let k = 0; k < 7; k++) {
      daysNames += `<div class="calendar__day-of-week">${daysLabelsSun[k]}</div>`;
      daysOfWeek.innerHTML = daysNames;
    }
  } else {
    for (let k = 0; k < 7; k++) {
      daysNames += `<div class="calendar__day-of-week">${daysLabelsMon[k]}</div>`;
      daysOfWeek.innerHTML = daysNames;
    }
  }
}

// ON/OF ToDo list
document
  .querySelector(".pop-up__checkbox-item")
  .addEventListener("change", todoActivation);

function todoActivation() {
  if (!addTodo.checked) {
    localStorage.setItem("todoActive", false);
  } else {
    localStorage.setItem("todoActive", true);
  }
}

// Save Btn
const popUpSettings = document.querySelector(".pop-up__settings");

popUpSettings.onsubmit = (e) => {
  e.preventDefault(); 
  selectFirstDay();
  popUpHandler();
  selectWeekends(); 
  showMonth();
  renderCalendar();
  todoActivation();
}

// default weekend setting

const firstWeekend = document.getElementById("first-weekend");
const secondWeekend = document.getElementById("second-weekend");

for (let i = 0; i < firstWeekend.options.length; i++) {
  let firstDefaultWeekend = firstWeekend.options[i];
  if (firstDefaultWeekend.value === localStorage.getItem("firstWeekendDay")) {
    firstDefaultWeekend.setAttribute("selected", true);
  }
}

for (let i = 0; i < secondWeekend.options.length; i++) {
  let secondDefaultWeekend = secondWeekend.options[i];
  if (secondDefaultWeekend.value === localStorage.getItem("secondWeekendDay")) {
    secondDefaultWeekend.setAttribute("selected", true);
  }
}

function selectWeekends() {
  let firstWeekendDay = firstWeekend.options[firstWeekend.selectedIndex].value;
  let secondWeekendDay =
    secondWeekend.options[secondWeekend.selectedIndex].value;
  localStorage.setItem("firstWeekendDay", firstWeekendDay);
  localStorage.setItem("secondWeekendDay", secondWeekendDay);
}

// settings for days of the next and previous month
const showRearMonth = document.getElementById("show-month");
const hideRearMonth = document.getElementById("hide-month");

if (JSON.parse(localStorage.showAdditionalDays) === true) {
  showRearMonth.checked = true;
} else {
  hideRearMonth.checked = true;
}

function showMonth() {
  if (showRearMonth.checked) {
    localStorage.setItem("showAdditionalDays", true);
  }

  if (hideRearMonth.checked) {
    localStorage.setItem("showAdditionalDays", false);
  }
}
