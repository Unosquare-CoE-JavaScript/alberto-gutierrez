import React from "react";
export function Box({ children, className, style }) {
  return (
    <div
      style={{ maxWidth: "80vw", margin: "0 auto", ...style }}
      className={className}>
      {children}
    </div>
  );
}
