import React from "react";
import { Transition } from "react-transition-group";

import "./Modal.css";

const modal = ({ open, closed }) => {
  const transitionStyles = {
    entering: { opacity: 0, transform: "translateY(-100vh)" },
    entered: { opacity: 1, transform: "translateY(0)" },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  return (
    <Transition in={open} mountOnEnter unmountOnExit timeout={200}>
      {(stateName) => {
        return (
          <div className={`Modal`} style={{ ...transitionStyles[stateName] }}>
            <h1>A Modal</h1>
            <button className="Button" onClick={closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
