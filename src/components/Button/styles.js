import styled from "styled-components";
import { darken } from "polished";

function getBackground({ color, active }) {
  if (color === "primary") return "#6eb6a2";
  if (active) return "#777";
  return "#fff";
}
function getForeground({ color, active }) {
  if (color === "primary" || active) return "#fff";
  return "#000";
}

export const Container = styled.button`
  background: ${props => getBackground(props)};
  color: ${props => getForeground(props)};
  border: 1px solid ${props => (props.color === "primary" ? "#6eb6a2" : "#000")};
  font-weight: 400;
  margin: 5px;
  outline: none;
  min-width: 60px;
  padding: 8px 10px;
  cursor: pointer;
  :hover {
    background: ${props => darken(0.1, getBackground(props))};
  }
`;
