import React from "react";
import { Transition } from "react-transition-group";

import "./Backdrop.css";
const transitionStyles = {
  entering: { opacity: 0, transform: "translateX(-100vw)" },
  entered: { opacity: 1, transform: "translateY(0)" },
  exiting: { opacity: 0, transform: "translateX(-100vw)" },
  exited: { opacity: 0 },
};
const backdrop = ({ open }) => (
  <Transition in={open} mountOnEnter unmountOnExit timeout={200}>
    {(stateName) => {
      return (
        <div
          className={`Backdrop`}
          style={{ ...transitionStyles[stateName] }}></div>
      );
    }}
  </Transition>
);

export default backdrop;
