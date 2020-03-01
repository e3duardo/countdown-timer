import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./index";

test("renders single button", () => {
  const { getByText } = render(<Button label="1X" />);
  const node = getByText(/1X/i);
  expect(node).toBeInTheDocument();
});

test("renders green button", () => {
  const { getByText } = render(<Button label="1X" color="primary" />);
  const node = getByText(/1X/i);

  expect(node).toHaveStyleRule("background", "#6eb6a2");
});

test("on click must be called", () => {
  const mockOnClick = jest.fn(x => x);

  const { getByText } = render(<Button label="1X" onClick={mockOnClick} />);

  fireEvent.click(getByText("1X"));

  expect(mockOnClick.mock.calls.length).toBe(1);
});
