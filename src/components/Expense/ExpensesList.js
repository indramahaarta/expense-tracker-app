import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.data.length === 0) {
    return <p className="no-data">No expense found.</p>;
  }

  return (
    <ul className="expense-lists">
      {props.data.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
