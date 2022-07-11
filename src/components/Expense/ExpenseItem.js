import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li className="expense">
      <Card className="expense-body">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-detail">
          <div className="expense-detail-title">{props.title}</div>
          <Card className="expense-detail-amount">${props.amount}</Card>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
