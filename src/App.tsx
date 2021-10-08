import { useEffect, useState } from 'react';

import * as C from './App.styles'
import { Item, Category } from './types'
import { items, categories } from './data'
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

function App() {
  const [list, setList] = useState(items);
  const [filterList, setFilterList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  useEffect(() => {
    setFilterList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth])

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    filterList.forEach(item => {
      if(categories[item.category].expense) {
        expenseCount += item.value;
      } else {
        incomeCount += item.value;
      }
    })

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filterList])
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
          />
        <InputArea onAdd={handleAddItem}/>  
        
        <TableArea list={filterList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
