import ExpenseItem from "./ExpenseItem";
import "./ExpensesDisplay.css";

const ExpenseDisplay = (props) => {
  return (
    <div>
      {props.expenses.length === 0 && (
        <h2 className="expenses-display__fallback">Found no expense </h2>
      )}
      {props.expenses.length > 0 && (
        <ul className="expenses-display">
          {props.expenses.map((expense) => (
            <ExpenseItem expenseDetail={expense} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseDisplay;
