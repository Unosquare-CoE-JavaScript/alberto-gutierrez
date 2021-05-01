import { Box } from "./components/container/Box";
import { ExpensesContainer } from "./components/Expenses/ExpenseItem";
import { FormContainer } from "./components/Expenses/FormExpense";
import { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [arr, setArr] = useState(expenses);
  return (
    <Box>
      <h2>Let's get started!</h2>
      <FormContainer
        onSubmit={(values) => {
          console.log(values);
          setArr((prev) => {
            return [values, ...prev];
          });
        }}
      />
      <ExpensesContainer expenses={arr} />
    </Box>
  );
}

export default App;
