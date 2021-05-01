import ReactDOM from "react-dom";
export function Portal({ children, querySelector = "root" }) {
  return ReactDOM.createPortal(children, document.querySelector(querySelector));
}
