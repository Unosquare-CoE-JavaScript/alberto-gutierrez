import { ToDOType } from "../models/toDO";

export function ToDo(props: { items: Array<ToDOType> }): JSX.Element {
  const { items, ...rest } = props;
  return (
    <ul>
      {props.items.map((item) => (
        <Item text={item.text} id={item.id} key={item.id} />
      ))}
    </ul>
  );
}
export function ToDOInput() {
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
      }}>
      <label>Ingresa Nombre</label>
      <input type="text" />
      <button type="submit">OK</button>
    </form>
  );
}
function Item(props: ToDOType) {
  return <li>{props.text}</li>;
}
