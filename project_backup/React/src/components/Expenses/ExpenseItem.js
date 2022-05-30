import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
 
  //ola ta react hooks ksekinane me to use

  
  //array destructuring 
  // epistrefei enna array pou i prwti timi
  //einai h timi tou props.title
  //kai h deuteri timi einai ena function setTitle

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card> 
    </li>
  );
}

export default ExpenseItem;
