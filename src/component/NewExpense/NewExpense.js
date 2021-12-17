import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [expenseAdd, setexpenseAdd] = useState("toAdd");
  const expenseAddHandler = () => {
    setexpenseAdd("Adding");
  };

  const expenseAddCancelHandler = () => {
    setexpenseAdd("toAdd");
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.floor(Math.random() * 100),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setexpenseAdd("toAdd");
  };

  return (
    <div className="new-expense">
      {expenseAdd === "toAdd" && (
        <button onClick={expenseAddHandler}>Add new expense</button>
      )}
      {expenseAdd === "Adding" && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onExpenseAddCancel={expenseAddCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
