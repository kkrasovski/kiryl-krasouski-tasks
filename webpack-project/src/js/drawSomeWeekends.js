import { holidayConfig } from "./defaultSettings";
export function setHolidays(date, i, calendarSingleDay, currentHolidayDay) {
  holidayConfig.forEach((item) => {
    let holiday = new Date(`${date.getFullYear()}, ${item}`);   
    let currentHolidayDay = new Date(
      `${date.getFullYear()}, ${date.getMonth() + 1}, ${i}`
    );
  
    if (Date.parse(holiday) === Date.parse(currentHolidayDay)) {
      calendarSingleDay.classList.add("day_weekend");
    }
  });
}


