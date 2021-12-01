import { renderCalendar } from "./calendar";
export function switchMonth(step: number, date: Date ):void {  
  date.setMonth(date.getMonth() + step);   
  renderCalendar() 
}