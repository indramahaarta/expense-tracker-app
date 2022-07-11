import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandle = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveExpenseItem(expenseData);
  };

  const [formIsOpen, setFormIsOpen] = useState(false);

  const dogleFormIsOpen = () => {
    setFormIsOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <Card className="new-expense">
      {!formIsOpen ? (
        <div className="add-new-expenses-btn">
          <button
            type="button"
            onClick={dogleFormIsOpen}
          >
            Add New Expense
          </button>
        </div>
      ) : (
        <ExpenseForm
          onSaveExpenseItem={saveExpenseDataHandle}
          dogleForm={dogleFormIsOpen}
        />
      )}
    </Card>
  );
};

export default NewExpense;
