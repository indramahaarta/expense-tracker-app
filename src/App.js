import React, {useState} from 'react';
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const expenses = [
  {
    id: "1",
    title: "Car Insurance",
    date: new Date(2021, 6, 22),
    amount: 123,
  },
  {
    id: "2",
    title: "Bioskop Ticket",
    date: new Date(2022, 11, 12),
    amount: 10,
  },
  {
    id: "3",
    title: "Noodle",
    date: new Date(2020, 0, 1),
    amount: 150,
  },
];

function App() {
  const [data, setData] = useState(expenses);

  const saveExpenseDataHandle = (newExpenseData) => {
    setData((prevData) => {
      return[newExpenseData, ...prevData];
    })
  }

  return (
    <div className="App">
      <NewExpense onSaveExpenseItem={saveExpenseDataHandle}/>
      <Expenses data={data}></Expenses>
    </div>
  );
}

export default App;
