import React, { useState } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";
function App() {
  const [open, toggle] = useState(false);
  const [open2, toggle2] = useState(false);
  return (
    <div className="App">
      <h1>React Animations</h1>
      <button
        onClick={() => {
          toggle2(!open2);
        }}>
        Toggle
      </button>
      {open2 && (
        <Transition in={open2} timeout={300}>
          {(ev) => <div>Something {ev}</div>}
        </Transition>
      )}
      <br />
      <Modal
        open={open}
        closed={() => {
          toggle(false);
        }}
      />
      <Backdrop open={open} />
      <button
        className="Button"
        onClick={() => {
          toggle(true);
        }}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
