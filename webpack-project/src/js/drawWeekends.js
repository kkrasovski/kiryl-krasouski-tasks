// draw weekends title (first day sunday or monday)
export function setWeekends(weekendDays, g) {
  if (
    weekendDays.getDay() == localStorage.firstWeekendDay ||
    weekendDays.getDay() == localStorage.secondWeekendDay
  ) {
    g.classList.add("day_weekend");
  }
}