import React, { createContext, useReducer, useContext } from "react";
import "./styles.css";

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };
    case "decrement":
      return {
        count: state.count - 1
      };
    default:
      throw new Error("Unexpected action");
  }
};

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  return useContext(CounterContext);
};

const Counter = () => {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
};

export const ContextTest = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};
