import { holidayConfig } from "./defaultSettings";
export function setHolidays(date, i, calendarSingleDay, currentHolidayDay) {
  holidayConfig.forEach((item) => {
    let holiday = new Date(item);

    if (Date.parse(holiday) === Date.parse(currentHolidayDay)) {
      calendarSingleDay.classList.add("day_weekend");
    }
  });
}
