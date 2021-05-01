import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const { counter, hide } = useSelector((state) => state);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: (state) => ({ hide: !Boolean(hide) }) });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!hide && <div className={classes.value}>{counter}</div>}
      <button
        onClick={() => {
          dispatch({ type: (state) => ({ counter: state.counter - 1 }) });
        }}>
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: (state) => ({ counter: state.counter + 1 }) });
        }}>
        +
      </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
