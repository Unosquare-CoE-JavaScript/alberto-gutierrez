import "./App.css";
import { Menu } from "./components/menu/Menu";
import { CartContext } from "./store/db";
import { useReducer } from "react";
import { Cart } from "./components/menu/Cart";

function App() {
  const [cart, setCart] = useReducer((prev = [], current) => {
    const exists = prev.find((item) => item.id === current.id);
    if (!exists) {
      return [...prev, current];
    }
    return prev.map((item) => {
      if (item.id === current.id) {
        item.qty = current.qty;
      }
      return item;
    });
  }, []);
  return (
    <div className="App">
      <CartContext.Provider value={{ cart, addItem: setCart }}>
        <Cart />
        <Menu />
      </CartContext.Provider>
    </div>
  );
}

export default App;
