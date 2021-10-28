import { useState } from "react";
import Expenses from "./component/Expense/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "id1",
    title: "Toilet Paper",
    amount: 46.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "id2",
    title: "New Earphone",
    amount: 499.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "id3",
    title: "Internet Bill",
    amount: 259.95,
    date: new Date(2021, 2, 28),
  },
  {
    id: "id4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
