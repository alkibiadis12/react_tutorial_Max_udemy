import React from "react";

const AddNewExpenseForm = (props) => {

    return (
        <div >
            <button onClick={props.onAddNewExpenseFormButtonHandler}>Add New Expense</button>
        </div>
    );
}

export default AddNewExpenseForm;