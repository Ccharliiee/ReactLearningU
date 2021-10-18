import "./ExpenseDate.css";

function ExpenseDate(props) {
  const ExpenseDateMonth = props.date.toLocaleString("en-US", {
    month: "long",
  });
  const ExpenseDateDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const ExpenseDateYear = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{ExpenseDateMonth}</div>
      <div className="expense-date__year">{ExpenseDateYear}</div>
      <div className="expense-date__day">{ExpenseDateDay}</div>
    </div>
  );
}

export default ExpenseDate;
