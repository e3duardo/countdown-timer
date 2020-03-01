import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("renders single button", () => {
  const { getByText } = render(<Button label="1X" />);
  const linkElement = getByText(/1X/i);
  expect(linkElement).toBeInTheDocument();
});
