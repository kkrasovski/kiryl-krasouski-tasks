const date: Date = new Date();

date.setDate(1);
import { todoOpen } from "./todoPopup";
import { switchMonth } from "./month-switch";
import { holidayConfig } from "./defaultSettings";
import { monthLabel } from "./defaultSettings";
import { setWeekends } from "./drawWeekends";
import { setHolidays } from "./drawSomeWeekends";
const calendarGrid: HTMLElement | null =
  document.querySelector(".calendar__grid");
if (!calendarGrid) throw Error("root element not found");

const prevArrow: HTMLElement | null = document.querySelector(".arrow_prev");
const nextArrow: HTMLElement | null = document.querySelector(".arrow_next");
if (!nextArrow || !prevArrow) throw Error("root element not found");

prevArrow.addEventListener("click", function (): void {
  switchMonth(-1, date);
});

nextArrow.addEventListener("click", function (): void {
  switchMonth(+1, date);
});

export const renderCalendar = (): void => {
  calendarGrid.innerHTML = "";
  const lastDayIndex: number = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const lastDay: number = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay: number = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  let firstDayIndex: number = date.getDay();
  let nextDays: number = 7 - lastDayIndex - 1;

  if (
    localStorage.firstWeekDay === "mon" ||
    localStorage.firstWeekDay === undefined
  ) {
    firstDayIndex = date.getDay() - 1;

    if (date.getDay() === 0) {
      firstDayIndex = date.getDay() - 1 + 7;
    }

    if (lastDayIndex === 0) {
      nextDays = 7;
    } else {
      nextDays = 7 - lastDayIndex;
    }
  }

  const seasonHandler: HTMLElement | null = document.querySelector(".season__handler");
  if (!seasonHandler) throw Error("root element not found");
  seasonHandler.innerHTML = monthLabel[date.getMonth()];
  let dateWeekend: Date = new Date(date.getTime());
  let lastDateWeekend: Date = new Date(dateWeekend.setMonth(date.getMonth() - 1));
  let nextDateWeekend: Date = new Date(dateWeekend.setMonth(date.getMonth() + 1));

  //current year
  const calendarYear: HTMLElement | null = document.querySelector(".calendar__year");
  if (!calendarYear) throw Error("root element not found");
  calendarYear.innerHTML = `${date.getFullYear()}`;

  for (let i: number = 1; i <= lastDay; i++) {
    let dateWeekend: Date = new Date(date.getTime());
    dateWeekend.setDate(i);

    const calendarSingleDay: HTMLElement = document.createElement("div");
    calendarSingleDay.innerText = `${i}`;

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
    // set "have task icon"
    let dateCode: string = `${i}${date.getMonth()}${date.getFullYear()}`;
    if (localStorage.getItem(dateCode) != null) {
      calendarSingleDay.classList.add("day_have-tasks");
    }

    setHolidays(date, i, calendarSingleDay);
    calendarSingleDay.addEventListener("click", (e: Event) => {      
      todoOpen(e, date);
    });

    setWeekends(dateWeekend, calendarSingleDay);
  }

  // next months days in current month
  if (localStorage.getItem("showAdditionalDays") == "true") {
    for (let j: number = 1; j <= nextDays; j++) {
      nextDateWeekend.setDate(j);
      if (nextDateWeekend.getMonth() == 1) {
        nextDateWeekend.setFullYear(dateWeekend.getFullYear() + 1);
      }

      const calendarSingleDay: HTMLElement = document.createElement("div");
      calendarSingleDay.className = "calendar__day day_next";
      calendarSingleDay.innerText = `${j}`;
      calendarGrid.append(calendarSingleDay);

      // set icon if todo true
      let dateCode:string = `${j}${nextDateWeekend.getMonth()}${nextDateWeekend.getFullYear()}`;
      if (localStorage.getItem(dateCode) != null) {
        calendarSingleDay.classList.add("day_have-tasks");
      }

      setHolidays(date, j, calendarSingleDay);
      calendarSingleDay.addEventListener("click", (e: Event) => {
        let nextDate: Date = new Date(date.setMonth(date.getMonth() + 1));
        todoOpen(e, nextDate);
      });
      setWeekends(nextDateWeekend, calendarSingleDay);
    }
  } else {
    for (let j: number = 1; j <= nextDays; j++) {
      const calendarSingleDay: HTMLElement = document.createElement("div");
      calendarSingleDay.className = "calendar__day day_inactive";
      calendarGrid.append(calendarSingleDay);
    }
  }

  // prev months days in current month
  if (localStorage.getItem("showAdditionalDays") == "true") {
    for (let x: number = prevLastDay; x > prevLastDay - firstDayIndex; x--) {
      lastDateWeekend.setDate(x);
      const calendarSingleDay: HTMLElement = document.createElement("div");
      calendarSingleDay.className = "calendar__day day_prev";
      calendarSingleDay.innerText = `${x}`;
      calendarGrid.prepend(calendarSingleDay);

      // set "have task icon"
      // set icon if todo true
      let dateCode:string = `${x}${nextDateWeekend.getMonth()}${nextDateWeekend.getFullYear()}`;
      if (localStorage.getItem(dateCode) != null) {
        calendarSingleDay.classList.add("day_have-tasks");
      }

      setHolidays(date, x, calendarSingleDay);
      calendarSingleDay.addEventListener("click", (e: Event) => {
        let prevDate: Date = new Date(date.setMonth(date.getMonth() - 1));
        todoOpen(e, prevDate);
        prevDate = new Date(date.setMonth(date.getMonth() + 1));
      });
      setWeekends(lastDateWeekend, calendarSingleDay);
    }
  } else {
    for (let x: number = prevLastDay; x > prevLastDay - firstDayIndex; x--) {
      const calendarSingleDay: HTMLElement = document.createElement("div");
      calendarSingleDay.className = "calendar__day day_inactive";
      calendarGrid.prepend(calendarSingleDay);
    }
  }
};
renderCalendar();
