// draw weekends title (first day sunday or monday)

export function setWeekends(weekendDays, g) {
  if (
    weekendDays.getDay() === JSON.parse(localStorage.firstWeekendDay) ||
    weekendDays.getDay() === JSON.parse(localStorage.secondWeekendDay)
  ) {
    g.classList.add("day_weekend");
  }
}