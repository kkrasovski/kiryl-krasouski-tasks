import { popUpHandler } from "./settingsPopup";
import { renderCalendar } from "./calendar";

// SETTINGS
const daysLabelsMon: string[] = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];
const daysLabelsSun: string[] = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];
let firstWeekDayHandler: HTMLSelectElement | null =
  document.querySelector('[name="first-day"]');
console.log(firstWeekDayHandler);
if (!firstWeekDayHandler) throw Error("root element not found");

// settings for first day of the week
function selectFirstDay(): void {
  if (!firstWeekDayHandler) throw Error("root element not found");

  let firstWeekDay: string =
    firstWeekDayHandler.options[firstWeekDayHandler.selectedIndex].value;
  localStorage.setItem("firstWeekDay", firstWeekDay);

  setFirstDay();
}

// draw names of the day
function setFirstDay() {
  const daysOfWeek: HTMLElement | null =
    document.querySelector(".calendar__days");
  let daysNames: string = "";
  if (localStorage.firstWeekDay == "sun") {
    for (let k = 0; k < 7; k++) {
      daysNames += `<div class="calendar__day-of-week">${daysLabelsSun[k]}</div>`;
      if (!daysOfWeek) throw Error("root element not found");
      daysOfWeek.innerHTML = daysNames;
    }
  } else {
    for (let k = 0; k < 7; k++) {
      daysNames += `<div class="calendar__day-of-week">${daysLabelsMon[k]}</div>`;
      if (!daysOfWeek) throw Error("root element not found");
      daysOfWeek.innerHTML = daysNames;
    }
  }
}

// ON/OF ToDo list
let popUpCheckbox: HTMLElement | null = document.querySelector(
  ".pop-up__checkbox-item"
);
if (!popUpCheckbox) throw Error("root element not found");
popUpCheckbox.addEventListener("change", todoActivation);

function todoActivation():void {
  let addTodoToggle = <HTMLInputElement>document.getElementById("addTodo");
  if (!addTodoToggle) throw Error("root element not found");

  if (!addTodoToggle.checked) {
    localStorage.setItem("todoActive", "false");
  } else {
    localStorage.setItem("todoActive", "true");
  }
}

// Save Btn
const popUpSettings: HTMLElement | null =
  document.querySelector(".pop-up__settings");
if (!popUpSettings) throw Error("root element not found");
popUpSettings.onsubmit = (e: Event) => {
  e.preventDefault();
  selectFirstDay();
  popUpHandler();
  selectWeekends();
  showMonth();
  renderCalendar();
  todoActivation();
};

// default weekend setting

const firstWeekend = <HTMLSelectElement>document.getElementById("first-weekend");
const secondWeekend = <HTMLSelectElement>document.getElementById("second-weekend");

for (let i = 0; i < firstWeekend.options.length; i++) {
  let firstDefaultWeekend: HTMLOptionElement  = firstWeekend.options[i];  
  if (firstDefaultWeekend.value === localStorage.getItem("firstWeekendDay")) {
    firstDefaultWeekend.setAttribute("selected", "true");
  }
}

for (let i = 0; i < secondWeekend.options.length; i++) {
  let secondDefaultWeekend: HTMLOptionElement = secondWeekend.options[i];
  if (secondDefaultWeekend.value === localStorage.getItem("secondWeekendDay")) {
    secondDefaultWeekend.setAttribute("selected", "true");
  }
}

function selectWeekends(): void {
  let firstWeekendDay:string = firstWeekend.options[firstWeekend.selectedIndex].value;
  let secondWeekendDay:string =
    secondWeekend.options[secondWeekend.selectedIndex].value;
  localStorage.setItem("firstWeekendDay", firstWeekendDay);
  localStorage.setItem("secondWeekendDay", secondWeekendDay);
}

// settings for days of the next and previous month
const showRearMonth  = <HTMLInputElement>document.getElementById("show-month");
const hideRearMonth = <HTMLInputElement>document.getElementById("hide-month");

if (JSON.parse(localStorage.showAdditionalDays) === true) {
  showRearMonth.checked = true;
} else {
  hideRearMonth.checked = true;
}

function showMonth() {
  if (showRearMonth.checked) {
    localStorage.setItem("showAdditionalDays", "true");
  }

  if (hideRearMonth.checked) {
    localStorage.setItem("showAdditionalDays", "false");
  }
}
