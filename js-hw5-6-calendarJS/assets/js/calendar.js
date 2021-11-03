const date = new Date();
date.setDate(1);

let hi = "1111";
if (localStorage.getItem("showAdditionalDays") == null) {
  localStorage.setItem("showAdditionalDays", true);
}
if (
  localStorage.getItem("firstWeekendDay") == null &&
  localStorage.getItem("secondWeekendDay") == null
) {
  localStorage.setItem("firstWeekendDay", 6);
  localStorage.setItem("secondWeekendDay", 0);
}

const daysLabelsMon = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const daysLabelsSun = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthLabel = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let calendarGrid = document.querySelector(".calendar__grid");
const renderCalendar = () => {
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  let firstDayIndex = date.getDay();
  //console.log(firstDayIndex)
  let nextDays = 7 - lastDayIndex - 1;

  if (
    localStorage.firstWeekDay == "mon" ||
    localStorage.firstWeekDay == undefined
  ) {
    firstDayIndex = date.getDay() - 1;

    if (date.getDay() == 0) {
      firstDayIndex = date.getDay() - 1 + 7;
    }

    if (lastDayIndex == 0) {
      nextDays = 7;
    } else {
      nextDays = 7 - lastDayIndex;
    }
  }

  document.querySelector(".season__handler").innerHTML =
    monthLabel[date.getMonth()];
  let dateWeekend = new Date(date.getTime());
  let lastDateWeekend = new Date(dateWeekend.setMonth(date.getMonth() - 1));
  let nextDateWeekend = new Date(dateWeekend.setMonth(date.getMonth() + 1));

  //current prev months days in current month

 
  
  for (let i = 1; i <= lastDay; i++) {
    let dateWeekend = new Date(date.getTime());
    dateWeekend.setDate(i);

    let calendarSingleDay = document.createElement("div");


    console.log()
    calendarSingleDay.innerText = i;
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      calendarSingleDay.className = "calendar__day day_current";
    } else {
      calendarSingleDay.className = "calendar__day day";
    }

    // set icon if todo true
    let dateCode = `${i}${date.getMonth()}${date.getFullYear()}`;
    if (localStorage.getItem(dateCode) != null) {
      calendarSingleDay.classList.add("have-tasks");
    }

    calendarGrid.append(calendarSingleDay);

    calendarSingleDay.addEventListener("click", (e) => {
      todoOpen(e, date);
    });

    setWeekends(dateWeekend, calendarSingleDay);
  }

  // next months days in current month
  if (localStorage.getItem("showAdditionalDays") == "true") {
 
  for (let j = 1; j <= nextDays; j++) {
    nextDateWeekend.setDate(j);
    if (nextDateWeekend.getMonth() == 1) {
      nextDateWeekend.setFullYear(dateWeekend.getFullYear() + 1);
    }

    let calendarSingleDay = document.createElement("div");
    calendarSingleDay.className = "calendar__day day_next";
    calendarSingleDay.innerText = j;
    calendarGrid.append(calendarSingleDay);

    let dateCode = `${j}${nextDateWeekend.getMonth()}${nextDateWeekend.getFullYear()}`;
    if (localStorage.getItem(dateCode) != null) {
      calendarSingleDay.classList.add("have-tasks");
    }

    calendarSingleDay.addEventListener("click", (e) => {
      let nextDate = new Date(date.setMonth(date.getMonth() + 1));
      todoOpen(e, nextDate);

      prevDate = new Date(date.setMonth(date.getMonth() - 1));
    });

    setWeekends(nextDateWeekend, calendarSingleDay);
  } 
} else {
  for (let j = 1; j <= nextDays; j++) {
    let calendarSingleDay = document.createElement("div");
    calendarSingleDay.className = "calendar__day day_inactive";
    calendarGrid.append(calendarSingleDay);
  }
}

  // prev months days in current month
  if (localStorage.getItem("showAdditionalDays") == "true") {
  for (let x = prevLastDay; x > prevLastDay - firstDayIndex; x--) {
    lastDateWeekend.setDate(x);
    let calendarSingleDay = document.createElement("div");
    calendarSingleDay.className = "calendar__day day_prev";
    calendarSingleDay.innerText = x;
    calendarGrid.prepend(calendarSingleDay);
    let dateCode = `${x}${lastDateWeekend.getMonth()}${lastDateWeekend.getFullYear()}`;
    if (localStorage.getItem(dateCode) != null) {
      calendarSingleDay.classList.add("have-tasks");
    }
    calendarSingleDay.addEventListener("click", (e) => {
      let prevDate = new Date(date.setMonth(date.getMonth() - 1));
      todoOpen(e, prevDate);
      prevDate = new Date(date.setMonth(date.getMonth() + 1));
    });
    setWeekends(lastDateWeekend, calendarSingleDay);
  }
} else {
  for (let x = prevLastDay; x > prevLastDay - firstDayIndex; x--) {
    let calendarSingleDay = document.createElement("div");
    calendarSingleDay.className = "calendar__day day_inactive";
    calendarGrid.prepend(calendarSingleDay);
  }
}

};
renderCalendar();

// draw names of the day
function setFirstDay() {
  const daysOfWeek = document.querySelector(".calendar__days");
  let daysNames = "";
  if (localStorage.firstWeekDay == "sun") {
    for (let k = 0; k < 7; k++) {
      daysNames += `<div class="calendar__day-of-week" href="#">${daysLabelsSun[k]}</div>`;
      daysOfWeek.innerHTML = daysNames;
    }
  } else {
    for (let k = 0; k < 7; k++) {
      daysNames += `<div class="calendar__day-of-week" href="#">${daysLabelsMon[k]}</div>`;
      daysOfWeek.innerHTML = daysNames;
    }
  }
}

document.querySelector(".arrow_prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);

  calendarGrid.innerHTML = "";
  renderCalendar();
});

document.querySelector(".arrow_next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  calendarGrid.innerHTML = "";
  renderCalendar();
});

function setWeekends(weekendDays, g) {
  if (
    weekendDays.getDay() == localStorage.firstWeekendDay ||
    weekendDays.getDay() == localStorage.secondWeekendDay
  ) {
    g.classList.add("weekend");
  }
}

// SETTINGS

// select first day in settings
let firstWeekDayHandler = document.querySelector('[name="first-day"]');

function selectFirstDay() {
  let firstWeekDay =
    firstWeekDayHandler.options[firstWeekDayHandler.selectedIndex].value;
  localStorage.setItem("firstWeekDay", firstWeekDay);
  setFirstDay();
}

// ON / OF todo list in settings

document
  .querySelector(".pop-up__checkbox-item")
  .addEventListener("change", todoActivation);

function todoActivation() {
  console.log(typeof addTodo.checked);
  if (!addTodo.checked) {
    localStorage.setItem("todoActive", false);
  } else {
    localStorage.setItem("todoActive", true);
  }
}

let saveSettings = document.querySelector("#save");
saveSettings.addEventListener("click", () => {
  selectFirstDay();
  popUpHandler();
  selectWeekends();
  calendarGrid.innerHTML = "";
  showMonth();
  renderCalendar();
});

const firstWeekend = document.getElementById("first-weekend");
const secondWeekend = document.getElementById("second-weekend");

for (let i = 0; i < firstWeekend.options.length; i++) {
  let firstDefaultWeekend = firstWeekend.options[i];
  if (firstDefaultWeekend.value == localStorage.getItem("firstWeekendDay")) {
    firstDefaultWeekend.setAttribute("selected", true);
  }
}

for (let i = 0; i < secondWeekend.options.length; i++) {
  let secondDefaultWeekend = secondWeekend.options[i];
  if (secondDefaultWeekend.value == localStorage.getItem("secondWeekendDay")) {
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

// hide or show days before and after current month
let showRearMonth = document.getElementById("show-month");
let hideRearMonth = document.getElementById("hide-month");

if (localStorage.getItem("showAdditionalDays") == "true") {
  showRearMonth.checked = true;
} else {
  hideRearMonth.checked = true;
}

function showMonth() {
  if (showRearMonth.checked) {
    console.log("true");
    localStorage.setItem("showAdditionalDays", true);
  }

  if (hideRearMonth.checked) {
    console.log("false");
    localStorage.setItem("showAdditionalDays", false);
  }
}

