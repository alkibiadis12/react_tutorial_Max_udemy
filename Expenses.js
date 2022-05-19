import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFitlter from '../Filter/ExpensesFilter';

const Expenses = (props) => {
  const item0 = {
    title: props.items[0].title,
    amount: props.items[0].amount,
    date: props.items[0].date,
  };

  const item1 = {
    title: props.items[1].title,
    amount: props.items[1].amount,
    date: props.items[1].date,
  };

  const item2 = {
    title: props.items[2].title,
    amount: props.items[2].amount,
    date: props.items[2].date,
  };

  const item3 = {
    title: props.items[3].title,
    amount: props.items[3].amount,
    date: props.items[3].date,
  };

  const filteredYearHandler = (filteredYear) => {
      const filteredYeardata = filteredYear;
      console.log("The selected year is:"+filteredYeardata);
  }

  return (
    <div>
    <ExpensesFitlter onFilteredYear = {filteredYearHandler} />
    <Card className="expenses">

      <ExpenseItem
        title={item0.title}
        amount={item0.amount}
        date={item0.date}
      />
      <ExpenseItem
        title={item1.title}
        amount={item1.amount}
        date={item1.date}
      />
      <ExpenseItem
        title={item2.title}
        amount={item2.amount}
        date={item2.date}
      />
      <ExpenseItem
        title={item3.title}
        amount={item3.amount}
        date={item3.date}
      />
    
    </Card>
    </div>
  );
}

export default Expenses;
