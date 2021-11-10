export function haveTask(i,date,calendarSingleDay) {
  // set icon if todo true
   let dateCode = `${i}${date.getMonth()}${date.getFullYear()}`;
    if (localStorage.getItem(dateCode) != null) {
      calendarSingleDay.classList.add("day_have-tasks");
    }
}