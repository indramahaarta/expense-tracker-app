import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedFilter, setFilter] = useState("2020");

  const dropdownChangeHandler = (value) => {
    setFilter(value);
  };

  const filteredData = props.data.filter((val) => {
    return val.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedFilter}
        onDropdownChange={dropdownChangeHandler}
      ></ExpenseFilter>
      <ExpensesChart data={filteredData}></ExpensesChart>
      <ExpensesList data={filteredData}></ExpensesList>
    </Card>
  );
}

export default Expenses;
