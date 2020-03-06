import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Consumer", () => {
  afterEach(cleanup);

  test("Context value is updated by child", () => {
    const { getByText } = render(<App />);

    expect(getByText(/text/i).textContent).toEqual("init text");

    fireEvent.click(getByText("Click here"));

    expect(getByText(/text/i).textContent).toEqual("New Text");
  });
});
