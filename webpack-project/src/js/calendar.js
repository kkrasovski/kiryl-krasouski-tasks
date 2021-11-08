const date = new Date();
date.setDate(1);
import { todoOpen } from "./todoPopup";
const holidayConfig = ["2022.01.14", "2022.01.4", "2021.12.02", "2021.11.30"];

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
const calendarGrid = document.querySelector(".calendar__grid");
export const renderCalendar = () => {
  calendarGrid.innerHTML = "";
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
  let dateWeekend = new Date(date.getTime());
  let lastDateWeekend = new Date(dateWeekend.setMonth(date.getMonth() - 1));
  let nextDateWeekend = new Date(dateWeekend.setMonth(date.getMonth() + 1));

  //current  months days in current month

  for (let i = 1; i <= lastDay; i++) {
    let dateWeekend = new Date(date.getTime());
    dateWeekend.setDate(i);

    const calendarSingleDay = document.createElement("div");

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
      calendarSingleDay.classList.add("day_have-tasks");
    }

    // find holiday
    holidayConfig.forEach((item) => {
      let holiday = new Date(item);

      let currentHolidayDay = new Date(
        `${date.getFullYear()}, ${date.getMonth() + 1}, ${i}`
      );

      if (Date.parse(holiday) === Date.parse(currentHolidayDay)) {
        calendarSingleDay.classList.add("day_weekend");
      }
    });

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

      const calendarSingleDay = document.createElement("div");
      calendarSingleDay.className = "calendar__day day_next";
      calendarSingleDay.innerText = j;
      calendarGrid.append(calendarSingleDay);

      // set icon if todo true
      let dateCode = `${j}${nextDateWeekend.getMonth()}${nextDateWeekend.getFullYear()}`;
      if (localStorage.getItem(dateCode) != null) {
        calendarSingleDay.classList.add("day_have-tasks");
      }
      // find holiday
      holidayConfig.forEach((item) => {
        let holiday = new Date(item);
        let nextHolidayDay = new Date(
          `${date.getFullYear()}, ${nextDateWeekend.getMonth() + 1}, ${j}`
        );

        if (Date.parse(holiday) === Date.parse(nextHolidayDay)) {
          calendarSingleDay.classList.add("day_weekend");
        }
      });

      calendarSingleDay.addEventListener("click", (e) => {
        let nextDate = new Date(date.setMonth(date.getMonth() + 1));
        todoOpen(e, nextDate);

        let prevDate = new Date(date.setMonth(date.getMonth() - 1));
      });

      setWeekends(nextDateWeekend, calendarSingleDay);
    }
  } else {
    for (let j = 1; j <= nextDays; j++) {
      const calendarSingleDay = document.createElement("div");
      calendarSingleDay.className = "calendar__day day_inactive";
      calendarGrid.append(calendarSingleDay);
    }
  }

  // prev months days in current month
  if (localStorage.getItem("showAdditionalDays") == "true") {
    for (let x = prevLastDay; x > prevLastDay - firstDayIndex; x--) {
      lastDateWeekend.setDate(x);
      const calendarSingleDay = document.createElement("div");
      calendarSingleDay.className = "calendar__day day_prev";
      calendarSingleDay.innerText = x;
      calendarGrid.prepend(calendarSingleDay);

      // set icon if todo true
      let dateCode = `${x}${lastDateWeekend.getMonth()}${lastDateWeekend.getFullYear()}`;
      if (localStorage.getItem(dateCode) != null) {
        calendarSingleDay.classList.add("day_have-tasks");
      }

      //  find holiday
      holidayConfig.forEach((item) => {
        let holiday = new Date(item);

        let prevHolidayDay = new Date(
          `${date.getFullYear()}, ${lastDateWeekend.getMonth() + 1}, ${x}`
        );

        if (Date.parse(holiday) === Date.parse(prevHolidayDay)) {
          calendarSingleDay.classList.add("weekend");
        }
      });

      calendarSingleDay.addEventListener("click", (e) => {
        let prevDate = new Date(date.setMonth(date.getMonth() - 1));
        todoOpen(e, prevDate);
        prevDate = new Date(date.setMonth(date.getMonth() + 1));
      });
      setWeekends(lastDateWeekend, calendarSingleDay);
    }
  } else {
    for (let x = prevLastDay; x > prevLastDay - firstDayIndex; x--) {
      const calendarSingleDay = document.createElement("div");
      calendarSingleDay.className = "calendar__day day_inactive";
      calendarGrid.prepend(calendarSingleDay);
    }
  }
};
renderCalendar();

// draw weekends
function setWeekends(weekendDays, g) {
  if (
    weekendDays.getDay() == localStorage.firstWeekendDay ||
    weekendDays.getDay() == localStorage.secondWeekendDay
  ) {
    g.classList.add("day_weekend");
  }
}
