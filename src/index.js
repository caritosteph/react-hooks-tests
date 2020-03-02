import React from "react";
import ReactDOM from "react-dom";

import { ContextTest } from "./CounterExample/CounterContext";
import { ContextAsyncTest } from "./CounterAsyncExample/CounterAsyncContext";
import { CustomCounter } from "./CustomCounter/CustomCounter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <strong>Custom Counter</strong>
    <CustomCounter />
    <br />
    <strong>Context component</strong>
    <ContextTest />
    <br />
    <strong>Async Context component</strong>
    <ContextAsyncTest />
  </React.StrictMode>,
  rootElement
);
