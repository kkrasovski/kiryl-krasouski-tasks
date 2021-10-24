const date = new Date();
const renderCalendar = () => {
  date.setDate(1);

  const calendarGrid = document.querySelector('.calendar__grid');
  
  
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay()-1;
console.log(firstDayIndex)

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  //const nextDays = 7 - lastDayIndex - 1;
  const nextDays = 7 - lastDayIndex ;
  let dayLabel = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"];
  
  let monthLabel = [
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
  
  document.querySelector('.season__handler').innerHTML = monthLabel[date.getMonth()];
  let days = "";
  console.log(firstDayIndex)
  console.log(prevLastDay)

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="calendar__day day_prev">${prevLastDay - x +1}</div>`;
    console.log('1')
  }
  
  for (let i=1;  i<=lastDay; i++) {
    console.log('2')
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="calendar__day day_current">${i}</div>`;
    } else {
      days += `<div class="calendar__day day">${i}</div>`;
    }
    
    
  }
  
  for (let j=1; j<=nextDays; j++) {
    console.log('3')
    days+=`<div class="calendar__day day_next">${j}</div>`;
    calendarGrid.innerHTML = days;
  }
}


document.querySelector('.arrow_prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar()
  })


document.querySelector('.arrow_next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
  })
  renderCalendar()