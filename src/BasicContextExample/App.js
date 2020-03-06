import React, { useState } from "react";
import Context from "./Context";
import Consumer from "./Consumer";

const App = () => {
  const [state, setState] = useState("init text");

  const changeText = () => {
    setState("New Text");
  };

  return (
    <Context.Provider
      value={{
        state,
        changeText
      }}
    >
      <Consumer />
    </Context.Provider>
  );
};

export default App;
