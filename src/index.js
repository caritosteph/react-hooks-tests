import React from "react";
import ReactDOM from "react-dom";

import { ContextTest } from "./CounterExample/CounterContext";
import { ContextAsyncTest } from "./CounterAsyncExample/CounterAsyncContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <strong>Context Test</strong>
    <ContextTest />
    <br />
    <strong>Context Async Test</strong>
    <ContextAsyncTest />
  </React.StrictMode>,
  rootElement
);
