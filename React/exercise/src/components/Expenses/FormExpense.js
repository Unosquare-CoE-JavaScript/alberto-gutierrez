import { Box } from "../container/Box";
import "./style/form.css";
import { useState } from "react";
export function FormExpense({ onSubmit, onClose }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit?.({
          id: Math.random().toString(),
          title,
          date: new Date(date),
          amount,
        });
        setTitle("");
        setAmount("");
        setDate("");
      }}>
      <Input
        onChange={({ target }) => {
          setTitle(target.value);
        }}
        value={title}
        label="Title"
      />
      <Input
        onChange={({ target }) => {
          setAmount(target.value);
        }}
        value={amount}
        label="Amount"
        type="number"
        min="0.01"
        step="0.01"
      />
      <Input
        onChange={({ target }) => {
          setDate(target.value);
        }}
        value={date}
        label="Date"
        type="date"
      />
      <div className="new-expense__actions" style={{ margin: "2rem" }}>
        <button
          onClick={() => {
            onClose?.();
          }}>
          Cancelar
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
function Input({ label, ...rest }) {
  return (
    <div className="new-expense__control">
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
}
export function FormContainer({ onSubmit, ...rest }) {
  const [open, toggle] = useState(0);
  return (
    <Box className="new-expense">
      {open ? (
        <FormExpense
          onSubmit={(val) => {
            onSubmit(val);
            toggle(0);
          }}
          onClose={() => {
            toggle(0);
          }}
          {...rest}
        />
      ) : (
        <button
          onClick={() => {
            toggle(!open);
          }}>
          {open ? "Cancelar" : "Add Expense"}
        </button>
      )}
    </Box>
  );
}
export function Select({ title, options, ...rest }) {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>{title}</label>
        <select {...rest}>
          <option value="">Select one</option>
          {options.map((item, key) => (
            <option key={key} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
