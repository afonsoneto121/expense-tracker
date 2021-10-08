import { Item } from "../types";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${(now.getMonth() + 1 )}`
}

export const filterListByMonth = (list: Item[], date: string) : Item[] => {
  let newList: Item[] = [];
  let [year, month] = date.split('-');
  newList = list.filter((item: Item) => item.date.getFullYear() === parseInt(year) && 
                (item.date.getMonth() +1 ) === parseInt(month)
  )
  return newList;
}

export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1) >=10 ? 
                `${date.getMonth()+1}` : 
                `0${date.getMonth()+1}`;

  let day = date.getDay() >= 10 ? 
              date.getDay().toString : 
              '0'+date.getDay();

  return `${day}/${month}/${year}`;
}

export const formatCurrentMonth = (date: string): string => {
  let [year,month] = date.split('-');
  let monthCalendar = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
  return `${monthCalendar[(parseInt(month)-1)]} de ${year}` 
}