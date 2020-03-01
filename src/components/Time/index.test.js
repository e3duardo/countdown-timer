import React from "react";
import { render } from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import Time from "./index";

test("renders red text when time is low", () => {
  const { getByText } = render(<Time time="00:15" playing={true} />);
  const node = getByText(/00:15/i);

  expect(node).toHaveStyleRule("color", "#f00");
  expect(node).toHaveStyleRule("animation", undefined);
});
test("renders blinked text when time is ultra low", () => {
  const { getByText } = render(<Time time="00:09" playing={true} />);
  const node = getByText(/00:09/i);

  expect(node).not.toHaveStyleRule("animation", undefined);
});
