import React from "react";
import useCounter from "./useCount";

export const CustomCounter = () => {
  const { count, increment, decrement } = useCounter({
    initialCount: 1,
    step: 2
  });

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};
