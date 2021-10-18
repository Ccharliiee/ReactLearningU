import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expenseDetail={props.expenses[0]} />
      <ExpenseItem expenseDetail={props.expenses[1]} />
      <ExpenseItem expenseDetail={props.expenses[2]} />
      <ExpenseItem expenseDetail={props.expenses[3]} />
    </Card>
  );
}

export default Expenses;
