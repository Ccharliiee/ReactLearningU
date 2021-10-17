import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 9, 16);
  const expenseDescription = "Internet Bill";
  const expenseAmount = 59.95;
  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseDescription}</h2>
        <div className="expense-item__price">${expenseAmount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
