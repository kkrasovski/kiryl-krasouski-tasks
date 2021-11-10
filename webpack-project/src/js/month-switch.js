export function switchMonth(step, date,renderCalendar) {  
  date.setMonth(date.getMonth() + step);   
  renderCalendar() 
}