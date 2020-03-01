import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import ReactTestUtils, { act } from "react-dom/test-utils";
import Countdown from "./index";

test("should change velocity", () => {
  const mockOnClick = jest.fn(x => x);

  const { queryByText } = render(<Countdown />);
  const button1 = queryByText("1X");
  const button15 = queryByText("1.5X");
  const button2 = queryByText("2X");

  button1.onclick = mockOnClick;
  button15.onclick = mockOnClick;
  button2.onclick = mockOnClick;

  fireEvent.click(button1);
  fireEvent.click(button15);
  fireEvent.click(button2);

  expect(mockOnClick.mock.calls.length).toBe(3);
});

test("should reset the counter when it reaches the end", async () => {
  let container = document.createElement("div");

  act(() => {
    ReactDOM.render(<Countdown />, container);
  });

  const input = container.querySelector("header>input");
  const start = container.querySelector("header>button");

  act(() => {
    input.value = "1";
    input.dispatchEvent(new Event("change", { bubbles: true }));
    start.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  await act(async () => {
    await new Promise(r => setTimeout(r, 1500));
  });

  expect(container.querySelector("main>span").innerHTML).toBe("00:00");
});

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
