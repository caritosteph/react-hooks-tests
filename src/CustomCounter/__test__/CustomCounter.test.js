import React from "react";
import cases from "jest-in-case";
import { render, cleanup } from "@testing-library/react";
import useCounter from "../../CustomCounter/useCount";

const Counter = ({ children, ...rest }) => children(useCounter(rest));

const setup = props => {
  const returnVal = {};
  render(
    <Counter {...props}>
      {val => {
        console.log(val);
        Object.assign(returnVal, val);
        return null;
      }}
    </Counter>
  );
  return returnVal;
};

afterEach(cleanup);

test("useCounter", () => {
  const counterData = setup();
  counterData.increment();
  expect(counterData.count).toBe(1);
  counterData.decrement();
  expect(counterData.count).toBe(0);
});

test("useCounter with initialCount", () => {
  const counterData = setup({ initialCount: 2 });
  counterData.increment();
  expect(counterData.count).toBe(3);
  counterData.decrement();
  expect(counterData.count).toBe(2);
});

test("useCounter with step", () => {
  const counterData = setup({ step: 2 });
  counterData.increment();
  expect(counterData.count).toBe(2);
  counterData.decrement();
  expect(counterData.count).toBe(0);
});

test("useCounter with step and initialCount", () => {
  const counterData = setup({ step: 2, initialCount: 5 });
  counterData.increment();
  expect(counterData.count).toBe(7);
  counterData.decrement();
  expect(counterData.count).toBe(5);
});

cases(
  "useCounter",
  ({ step, initialCount, postIncrement, postDecrement }) => {
    const counterData = setup({ step, initialCount });
    counterData.increment();
    expect(counterData.count).toBe(postIncrement);
    counterData.decrement();
    expect(counterData.count).toBe(postDecrement);
  },
  {
    basic: {
      postIncrement: 1,
      postDecrement: 0
    },
    initialCount: {
      initialCount: 2,
      postIncrement: 3,
      postDecrement: 2
    },
    step: {
      step: 2,
      postIncrement: 2,
      postDecrement: 0
    },
    "initial count and step": {
      initialCount: 5,
      step: 2,
      postIncrement: 7,
      postDecrement: 5
    }
  }
);
