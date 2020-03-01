import React from "react";
import { render } from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import InputNumber from "./index";

test("renders single input", () => {
  const { getByPlaceholderText } = render(
    <InputNumber placeholder="(min)" innerRef={null} />
  );
  const node = getByPlaceholderText("(min)");
  expect(node).toBeInTheDocument();

  node.value = "3";
  ReactTestUtils.Simulate.change(node);

  expect(node.value).toBe("3");
});

test("shold accept values bellow 6000", () => {
  const { getByPlaceholderText } = render(
    <InputNumber placeholder="(min)" innerRef={null} />
  );
  const node = getByPlaceholderText("(min)");

  node.value = "3";
  ReactTestUtils.Simulate.change(node);

  expect(node.value).toBe("3");
});

test("should not accept negative values", () => {
  const { getByPlaceholderText } = render(<InputNumber placeholder="(min)" />);
  const node = getByPlaceholderText("(min)");

  node.value = "-3";
  ReactTestUtils.Simulate.change(node);

  expect(node.value).toBe("");
});
