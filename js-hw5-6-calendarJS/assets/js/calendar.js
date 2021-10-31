const date = new Date();
date.setDate(1);

let counter = 0;
let hi = '1111'

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



  for (let i = 1; i <= lastDay; i++) {
    let calendarSingleDay = document.createElement("div");
    calendarSingleDay.innerText = i;
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      calendarSingleDay.className = "calendar__day day_current";
    } else {
      calendarSingleDay.className = "calendar__day day";
    }
    calendarGrid.append(calendarSingleDay);
    
    calendarSingleDay.addEventListener("click", (e) => {
      console.log(date)
      todoOpen(e, date);      
    });
   
  }

  for (let j = 1; j <= nextDays; j++) {
    let calendarSingleDay = document.createElement("div");
    calendarSingleDay.className = "calendar__day day_next";
    calendarSingleDay.innerText = j;
    calendarGrid.append(calendarSingleDay);

    calendarSingleDay.addEventListener("click", (e) => {     
      let nextDate = new Date(date.setMonth(date.getMonth()+1));
      todoOpen(e, nextDate);    
    });

  }

 
    for (let x = 0 ; x < firstDayIndex; x++) {  
    let calendarSingleDay = document.createElement("div");
    calendarSingleDay.className = "calendar__day day_prev";
    calendarSingleDay.innerText = prevLastDay - x;
    calendarGrid.prepend(calendarSingleDay);

    calendarSingleDay.addEventListener("click", (e) => {
      let prevDate = new Date(date.setMonth(date.getMonth()-1));
      todoOpen(e, prevDate);         
    });

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
  console.log(date);
  calendarGrid.innerHTML = "";
  renderCalendar();
});

document.querySelector(".arrow_next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  calendarGrid.innerHTML = "";
  renderCalendar();
  console.log(date);
});

// select first day in settings

let firstWeekDayHandler = document.querySelector('[name="first-day"]');

function SelectFirstDay() {
  let firstWeekDay =
    firstWeekDayHandler.options[firstWeekDayHandler.selectedIndex].value;
  localStorage.setItem("firstWeekDay", firstWeekDay);
  console.log(localStorage);
  console.log(date)
  setFirstDay();
}

let saveSettings = document.querySelector("#save");

saveSettings.addEventListener("click", () => {
  SelectFirstDay();
  popUpHandler();
  calendarGrid.innerHTML = "";
  renderCalendar();
});


