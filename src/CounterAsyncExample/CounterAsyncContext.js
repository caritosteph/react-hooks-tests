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

const isPromise = object => {
  return (
    !!object &&
    (typeof object === "object" || typeof object === "function") &&
    typeof object.then === "function"
  );
};

const middleware = dispatch => {
  return action => {
    if (isPromise(action.payload)) {
      action.payload.then(payload => dispatch({ type: action.type, payload }));
    }
    return dispatch(action);
  };
};

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch: middleware(dispatch) }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  return useContext(CounterContext);
};

const asyncCounter = async () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ count: 1 });
    }, 1000);
  });

const Counter = () => {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {state.count}

      <button
        onClick={() => dispatch({ type: "increment", payload: asyncCounter() })}
      >
        +
      </button>
    </div>
  );
};

export const ContextAsyncTest = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};
