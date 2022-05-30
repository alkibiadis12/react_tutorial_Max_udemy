import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //gia na min exw ksexorista states borw na doulepsw me object
  /* 
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  
  //me auton ton tropo kathe fora tha prepei na allazw
  //ola ta elements kai oxi mono to 1 me ton parakatw tropo
  //px mesa sto titleChangeHandler
  -----------------------------------------------
  setUserInput ({
    ...userInput,
    enteredTitle: event.target.value,
  });
  
  //me to ...userInput antigrafw ola ta proigoumena 
  //stoixeia to userInput kai me to 
  //enteredTitle: event.target.value,
  //kanw overwrite
  -----------------------------------------------
  //o parapanw tropos borei apo ta polla state
  //na ginei lathos kai na min traviksei to teluetaio state
  //me ton parakatw tropo omos i react mas eggiate oti tha
  //doulepsei opws prepei
  
  setUserInput((prevState) => {
    return { ...prevState, enteredTitle: event.target.value };
  });
  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //preventDefault giati to html form
    //mollis kanei submit stelnei http request
    //kai kanei restart ton server
    //enw emeis theloyme na xeiristoume to apotelesma me js
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    //katharizoume to input meta to submit
    //prepei mesa sta input omos na valoume kai values
    //gia na doulepsei
    //legete two way binding kai einai poli simantiko
    //eidika sta form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancelButtonHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
