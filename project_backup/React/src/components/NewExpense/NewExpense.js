import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpenseForm from "./AddNewExpenseForm";

const NewExpense = (props) => {
  
  const saveExpenseDateHandler = (enteredExpenseData) =>{
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
  };
  
 // --------------------------------------------- 

 const [controlExpensePage, setControlExpensePage] = useState(true);
  // true = AddNewExpenseForm
  // false = Expenseform
  
  const addNewExpenseFormButtonHandler = () => {
    setControlExpensePage(false);
    console.log("clicked");
  }

  const cancelButtonHandler = () => {
    setControlExpensePage(true);
  }

  let controlJSX = {}
  if (controlExpensePage) {
    controlJSX = <AddNewExpenseForm onAddNewExpenseFormButtonHandler = {addNewExpenseFormButtonHandler} />
  }else {
    controlJSX = <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler} onCancelButtonHandler ={cancelButtonHandler}/>
  }




  return (
    <div className="new-expense">
        {controlJSX}
     </div>
  );
};

export default NewExpense;
