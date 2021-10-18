import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem expenseDetail={props.expenses[0]} />
      <ExpenseItem expenseDetail={props.expenses[1]} />
      <ExpenseItem expenseDetail={props.expenses[2]} />
      <ExpenseItem expenseDetail={props.expenses[3]} />
    </div>
  );
}

export default Expenses;
