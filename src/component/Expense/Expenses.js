import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  return (
    <div>
      <ExpensesFilter />

      <Card className="expenses">
        {props.expenses.map((expense) => (
          <ExpenseItem expenseDetail={expense} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
