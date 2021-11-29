// draw weekends title (first day sunday or monday)

export function setWeekends(weekendDays: Date, g: HTMLElement | null):void {
  if (
    weekendDays.getDay() === JSON.parse(localStorage.firstWeekendDay) ||
    weekendDays.getDay() === JSON.parse(localStorage.secondWeekendDay)
  ) {
    if (!g) throw Error("root element not found");
    g.classList.add("day_weekend");
  }
}
