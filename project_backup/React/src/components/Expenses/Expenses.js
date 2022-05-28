import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFitlter from './ExpensesFilter';

const Expenses = (props) => {


  const [filteredYear,setFilteredYear] = useState(2019);
  
  const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
  }

  const filterYearArray = props.items.filter( expense => {
     return expense.date.getFullYear().toString() === filteredYear 
  })

  return (

    <Card className="expenses">
      
      <ExpensesFitlter selected={filteredYear} onChangeFilter = {filterChangeHandler} />

      {filterYearArray.map(expense => (
        
        <ExpenseItem
        //i react xreiazetai to key
        //gia na veltiosei to performance otan kanoume map
        //item lists
        //kai na apofigoume bugs me states
        //prepei na pernei monadiko id
        key = {expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        /> 
        ))}

    
    </Card>
    
  );
}

export default Expenses;
