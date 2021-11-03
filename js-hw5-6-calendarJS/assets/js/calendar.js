const date = new Date();
date.setDate(1);
let counter = 0;
let hi = "1111";
let weekendFirst = 4;
let weekendSecond = 2;
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
  
  let lastDateWeekend = new Date(dateWeekend.setMonth(date.getMonth()-1));
  let nextDateWeekend = new Date(dateWeekend.setMonth(date.getMonth()+1));

// main grid
  for (let i = 1; i <= lastDay; i++) {
    let dateWeekend = new Date(date.getTime());
    dateWeekend.setDate(i);

    let calendarSingleDay = document.createElement("div");
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

    calendarGrid.append(calendarSingleDay);

    calendarSingleDay.addEventListener("click", (e) => {
      todoOpen(e, date);
    });

    // weekendFirst.forEach(element => {
    //   console.log('из конфига', element, 'и', dateWeekend.getDay());
    
    //      if (
    //       dateWeekend.getDay() == element     
    //     ) {
    //       calendarSingleDay.classList.add("weekend");
    //     }
    // })
    setWeekends(dateWeekend,calendarSingleDay)
  }
// next grid
  for (let j = 1; j <= nextDays; j++) {
  
    nextDateWeekend.setDate(j);
    if (nextDateWeekend.getMonth() == 1) {
      nextDateWeekend.setFullYear(dateWeekend.getFullYear()+1);
      console.log(nextDateWeekend);
    }
   // console.log('просто следующий месяц', nextDateWeekend);

    let calendarSingleDay = document.createElement("div");
    calendarSingleDay.className = "calendar__day day_next";
    calendarSingleDay.innerText = j;
    calendarGrid.append(calendarSingleDay);

    calendarSingleDay.addEventListener("click", (e) => {
      let nextDate = new Date(date.setMonth(date.getMonth() + 1));
      todoOpen(e, nextDate);
      
      prevDate = new Date(date.setMonth(date.getMonth() - 1));
    });




  
    setWeekends(nextDateWeekend,calendarSingleDay)

  }


// prev grid
  for (let x = prevLastDay; x > prevLastDay - firstDayIndex; x--) {
    lastDateWeekend.setDate(x);
  //  console.log('пред',lastDateWeekend)
 
    let calendarSingleDay = document.createElement("div");
    calendarSingleDay.className = "calendar__day day_prev";
    calendarSingleDay.innerText = x;
    calendarGrid.prepend(calendarSingleDay);
    calendarSingleDay.addEventListener("click", (e) => {
      let prevDate = new Date(date.setMonth(date.getMonth() - 1));
      todoOpen(e, prevDate);
      prevDate = new Date(date.setMonth(date.getMonth() + 1));
    });
  
    setWeekends(lastDateWeekend,calendarSingleDay)
    
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
  console.log("next");
  renderCalendar();
});

// select first day in settings

let firstWeekDayHandler = document.querySelector('[name="first-day"]');

function selectFirstDay() {
  let firstWeekDay =
    firstWeekDayHandler.options[firstWeekDayHandler.selectedIndex].value;
  localStorage.setItem("firstWeekDay", firstWeekDay);
  console.log(localStorage);
  console.log(date);
  setFirstDay();
}

// ON / OF todo list

document
  .querySelector(".pop-up__chekbox-item")
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
  calendarGrid.innerHTML = "";
  renderCalendar();
});

 function setWeekends (weekendDays, g) {
  
  if (
    weekendDays.getDay() == weekendFirst ||
    weekendDays.getDay() == weekendSecond
  ) {
    g.classList.add("weekend");
  }
 
}