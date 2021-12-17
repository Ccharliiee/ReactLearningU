import "./Expenses.css";
import ExpensesDisplay from "./ExpensesDisplay";
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
      <ExpensesFilter
        filteredYear={filteredYear}
        filteredYearChangeHandler={filteredYearChangeHandler}
      />

      <Card className="expenses">
        <ExpensesDisplay expenses={filteredYearexpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
