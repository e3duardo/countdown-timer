import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import Countdown from "./index";

test("renders all components", () => {
  const {
    queryByText,
    queryByPlaceholderText,
    queryByTestId,
    getByPlaceholderText
  } = render(<Countdown />);
  const start = queryByText("START");
  expect(queryByPlaceholderText("(Min)")).toBeInTheDocument();
  expect(queryByText("1X")).toBeInTheDocument();
  expect(queryByText("1.5X")).toBeInTheDocument();
  expect(queryByText("2X")).toBeInTheDocument();

  expect(start).toBeInTheDocument();

  const input = getByPlaceholderText("(Min)");
  input.value = "300";
  ReactTestUtils.Simulate.change(input);
  fireEvent.click(start);

  expect(queryByTestId("play")).toBeInTheDocument();
});
