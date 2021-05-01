import { Portal } from "../Portal";
import { useEffect, useState } from "react";
import { ConditionalWall } from "../walls/ConditionalWall";

export function Modal({ children, open, onClose }) {
  const [show, toggle] = useState(open);
  useEffect(() => {
    toggle(open);
  }, [open]);

  return (
    <Portal querySelector="#overlay">
      <ConditionalWall open={show}>
        <div
          onClick={() => {
            toggle(0);
            onClose?.();
          }}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,.8)",
            position: "fixed",

            display: "flex",
            justifyContent: "center",
            flexFlow: "column",
            top: "0",
          }}>
          {children}
        </div>
      </ConditionalWall>
    </Portal>
  );
}
