export const holidayConfig = ["01 14", "01 4", "12 02", "11 30"];

export const monthLabel = [
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
