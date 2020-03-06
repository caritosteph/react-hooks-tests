import React from "react";
import { useContext } from "react";
import Context from "./Context";

const Consumer = () => {
  const { state, changeText } = useContext(Context);

  return (
    <div>
      <p>{state}</p>
      <button onClick={changeText}>Click here</button>
    </div>
  );
};

export default Consumer;
