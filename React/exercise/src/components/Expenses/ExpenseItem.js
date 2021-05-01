import React, { useState } from "react";
import "./style/expense.css";
import "./style/date.css";
import { Select } from "./FormExpense";
import { Chart } from "../Charts/Charts";

export function ExpensesContainer({ expenses = [] }) {
  const [filter, setFilter] = useState(null);
  const years = [
    ...new Set(expenses.map((expense) => expense.date.getFullYear())),
  ];
  const filtered = expenses.filter((expense) => {
    if (!filter) return true;
    return expense.date.getFullYear() === parseInt(filter);
  });
  return (
    <div className="expenses">
      <Select
        options={years.map((year) => ({ title: year, value: year }))}
        title="Year"
        onChange={({ target }) => {
          setFilter(target.value);
          console.log(target.value);
        }}
      />
      <ChartExpenses expenses={filtered} />
      {filtered.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </div>
  );
}
export function ExpenseItem({ date, amount = 0, title = "Titulo", ...rest }) {
  return (
    <div className="expense-item">
      <DateView calendar={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

function DateView({ calendar }) {
  const month = calendar.toLocaleString("es-MX", { month: "long" });
  const year = calendar.getFullYear();
  const day = calendar.toLocaleString("es-MX", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
function ChartExpenses({ expenses = [] }) {
  console.log(expenses);
  const datapoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dic", value: 0 },
  ];
  expenses.forEach((element, key) => {
    let index = element.date.getMonth();
    datapoints[index].value = element.amount;
  });
  return <Chart datapoints={datapoints} />;
}
