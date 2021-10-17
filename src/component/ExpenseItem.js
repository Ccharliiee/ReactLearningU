import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.expenseDetail.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.expenseDetail.title}</h2>
        <div className="expense-item__price">
          ${props.expenseDetail.amount}{" "}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
