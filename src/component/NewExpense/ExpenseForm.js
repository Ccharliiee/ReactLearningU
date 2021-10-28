import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredExpenseData, setEnteredExpenseData] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setEnteredExpenseData((preventered) => {
      return { ...preventered, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setEnteredExpenseData((preventered) => {
      return { ...preventered, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setEnteredExpenseData((preventered) => {
      return { ...preventered, enteredDate: event.target.value };
    });
  };

  const enteredExpenseSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredExpenseData.enteredTitle,
      amount: enteredExpenseData.enteredAmount,
      date: new Date(enteredExpenseData.enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredExpenseData({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={enteredExpenseSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredExpenseData.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredExpenseData.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-01-01"
            value={enteredExpenseData.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
