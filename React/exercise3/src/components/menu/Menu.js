import { CartContext, products } from "./../../store/db";
import { useContext, useEffect, useState } from "react";
export function Menu() {
  const ctx = useContext(CartContext);
  return (
    <>
      {products.map(({ name, description, price, id }) => (
        <ProductItem
          name={name}
          description={description}
          price={price}
          onAdd={(qty) => {
            ctx.addItem({ id, qty });
          }}
        />
      ))}
    </>
  );
}
function ProductItem({ name, description, price, onAdd }) {
  return (
    <>
      <div className="details">
        <ol>
          <li>{name}</li>
          <li>{description}</li>
          <li>{price}</li>
        </ol>
      </div>
      <ProductForm onChange={onAdd} />
    </>
  );
}
function ProductForm({ onChange }) {
  const [amount, setAmount] = useState(0);
  const handleChange = () => {
    onChange?.(amount);
  };
  useEffect(handleChange, [amount]);
  return (
    <div>
      <label>amount</label>
      <input
        type="number"
        value={amount}
        min={0}
        onChange={({ target }) => {
          setAmount(target.value);
        }}
      />
      <button
        onClick={() => {
          setAmount((prev) => (prev ? parseFloat(prev) + 1 : 1));
        }}>
        + Add
      </button>
    </div>
  );
}
