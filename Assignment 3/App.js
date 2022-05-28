import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const dummyExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

function App() {

  const [expenses, setExpenses] = useState(dummyExpenses);
  const [passedExpenses, setPassedExpenses] = useState(expenses);

  //----------------------------------------------------

  const addExpenseHandler = (expense) => {
    
   // ta comment einai o tropos pou to ilopoihsa
    // const expenseData = {
    //  ...expense,
    // };


    // const newExpenseArray = [...expenses];
    // newExpenseArray.push(expenseData)
    // setExpenses (newExpenseArray);

    setExpenses (prevExpenses => {
        return [expense, ...prevExpenses];
    });

    

  };

  //----------------------------------------------------

  const getSelectedYearHandler = (selectedYearValue) => {   

    let filteredArray = expenses.filter ( (expense) =>
    parseInt(expense.date.getFullYear()) === parseInt(selectedYearValue)
    )

    setPassedExpenses(filteredArray);

  };

  //----------------------------------------------------

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={passedExpenses} onGetSelectedYear={getSelectedYearHandler} />
    </div>
  );

  /*
  //alternative way without jsx
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  );
  */
}

//----------------------------------------------------
export default App;
