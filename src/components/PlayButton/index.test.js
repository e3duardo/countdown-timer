import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PlayButton from "./index";
import pause from "../../assets/pause.svg";
import resume from "../../assets/resume.svg";

test("renders nothing when hidden", () => {
  const { queryByTestId } = render(
    <PlayButton show={false} playing={true} onClick={() => {}} />
  );

  expect(queryByTestId(/play/i)).toBeNull();
});

test("renders pause button", () => {
  const { getByTestId } = render(
    <PlayButton show={true} playing={true} onClick={() => {}} />
  );

  expect(getByTestId("play").getAttribute("src")).toEqual(pause);
});

test("renders resume button", () => {
  const { getByTestId } = render(
    <PlayButton show={true} playing={false} onClick={() => {}} />
  );

  expect(getByTestId("play").getAttribute("src")).toEqual(resume);
});

test("on click must be called", () => {
  const mockOnClick = jest.fn(x => x);

  const { getByTestId } = render(
    <PlayButton show={true} playing={false} onClick={mockOnClick} />
  );

  fireEvent.click(getByTestId("play"));

  expect(mockOnClick.mock.calls.length).toBe(1);
});
