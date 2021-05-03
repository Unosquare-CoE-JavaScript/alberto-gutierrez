import React, { useState } from "react";

export function Greeting() {
  const [open, toggle] = useState(false);
  return (
    <>
      {open ? <p>Clicked</p> : "Unclick"}
      <h1
        onClick={() => {
          toggle(true);
        }}>
        hello mundo
      </h1>
    </>
  );
}
