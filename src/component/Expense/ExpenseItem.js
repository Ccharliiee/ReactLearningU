import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDetail.date} />
      <div className="expense-item__description">
        <h2>{props.expenseDetail.title}</h2>
        <div className="expense-item__price">
          ${props.expenseDetail.amount}{" "}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
