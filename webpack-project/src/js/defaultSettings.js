export const holidayConfig = [
  "2022.01.14",
  "2022.01.4",
  "2021.12.02",
  "2021.11.30",
];

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
