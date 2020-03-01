import styled from "styled-components";
import { darken, transparentize } from "polished";

function getBackground({ color, active }) {
  if (color === "primary") return "#6eb6a2";
  if (active) return "#6D757D";
  return "#fff";
}
function getForeground({ color, active }) {
  if (color === "primary" || active) return "#fff";
  return "#000";
}

export const Container = styled.button`
  border-radius: 3px;
  background: ${props => getBackground(props)};
  color: ${props => getForeground(props)};
  border: 1px solid ${props => (props.color === "primary" ? "#6eb6a2" : "#999")};
  font-weight: 400;
  margin: 5px;
  outline: none;
  min-width: 60px;
  padding: 8px 10px;
  cursor: pointer;
  :focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem
      ${props =>
        transparentize(0.75, props.color === "primary" ? "#6eb6a2" : "#999")};
  }
  :hover {
    background: ${props => darken(0.1, getBackground(props))};
  }
`;
