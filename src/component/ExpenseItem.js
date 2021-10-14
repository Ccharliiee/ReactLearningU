import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Oct 13, 2021</div>
      <div className="expense-item__description">
        <h2>Internet Bill</h2>
        <div className="expense-item__price">42.50</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
