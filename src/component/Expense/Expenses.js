import "./Expenses.css";
import ExpensesDisplay from "./ExpensesDisplay";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filteredYearChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };
  const filteredYearexpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          filteredYearChangeHandler={filteredYearChangeHandler}
        />
        <ExpenseChart expenses={filteredYearexpenses} />
        <ExpensesDisplay expenses={filteredYearexpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
