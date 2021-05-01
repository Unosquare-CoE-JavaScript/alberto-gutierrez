import { useContext, useState } from "react";
import { CartContext } from "../../store/db";
import { Modal } from "./../modal/Modal";
import { products } from "./../../store/db";

export function Cart() {
  const [show, toggle] = useState(0);
  const ctx = useContext(CartContext);
  const qty = ctx.cart.reduce((prev, item) => prev + item.qty, 0);
  return (
    <>
      {qty ? (
        <button
          onClick={() => {
            toggle(1);
          }}>
          Mi Carrito {qty}
        </button>
      ) : (
        ""
      )}
      <Modal
        open={show}
        onClose={() => {
          toggle(0);
        }}>
        <div
          style={{
            backgroundColor: "white",
            minHeight: "200px",
            width: "90%",
            margin: "0 auto",
            borderRadius: "9px",
          }}>
          <FullCart cart={ctx.cart} />
        </div>
      </Modal>
    </>
  );
}

function FullCart({ cart }) {
  cart = cart.map((item) => {
    const product = products.find((pr) => pr.id === item.id);
    return { ...product, ...item };
  });
  const list = cart
    .filter((pr) => pr.qty > 0)
    .map((item) => (
      <CartItem title={item.name} qty={item.qty} unitPrice={item.price} />
    ));
  const total = cart.reduce((prev, current) => {
    const unitPrice = current.qty * current.price;
    return prev + unitPrice;
  }, 0);
  return (
    <>
      <ul>{list}</ul>
      <h1 style={{ textAlign: "center", color: "green" }}>Total:${total}</h1>
    </>
  );
}

function CartItem({ title, qty, unitPrice }) {
  const total = unitPrice;

  return (
    <li>
      <h5>{title}</h5>
      {qty} x {unitPrice} = {total}
    </li>
  );
}
