import { holidayConfig } from "./defaultSettings";
export function setHolidays(date: Date, i: number, calendarSingleDay: HTMLElement | null):void {
  holidayConfig.forEach((item) => {

    let holiday: string = `${new Date(`${date.getFullYear()}, ${item}`)}`;   
   
    let currentHolidayDay: string = `${new Date(
      `${date.getFullYear()}, ${date.getMonth() + 1}, ${i}`
    )}`;
  
    if (Date.parse(holiday) === Date.parse(currentHolidayDay)) {
      if (!calendarSingleDay) throw Error("root element not found");
      calendarSingleDay.classList.add("day_weekend");
    }
  });
}


