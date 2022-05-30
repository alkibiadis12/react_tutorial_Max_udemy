import React, {useState} from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFitlter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
      <ExpensesChart expenses = {filterYearArray} />
      <ExpensesList filterArray = {filterYearArray}  />
    </Card>
  );

}

export default Expenses;



//1os trops me erwtimatiko
      // filterYearArray.length === 0 ? (
      // <p>Empty array</p>) 
      // :
      // (filterYearArray.map( expense => (
      //   <ExpenseItem
      //   //i react xreiazetai to key
      //   //gia na veltiosei to performance otan kanoume map
      //   //item lists
      //   //kai na apofigoume bugs me states
      //   //prepei na pernei monadiko id
      //   key = {expense.id}
      //   title={expense.title}
      //   amount={expense.amount}
      //   date={expense.date}
      //   /> 
      //   //to erwtimatiko einai default javascript
      //   //anti gia if giati edw den ginetai na bei if
        
      //   ))
      // )

      //2 tropos me &&
      // {filterYearArray.length === 0 && <p>Empty array</p>}

      // {filterYearArray.length > 0 &&  
      //   filterYearArray.map( expense => (
      //    <ExpenseItem
      //     key = {expense.id}
      //     title={expense.title}
      //     amount={expense.amount}
      //     date={expense.date}
      //   />  
      //   )) }