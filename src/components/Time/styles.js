import styled, { keyframes, css } from "styled-components";

export const Container = styled.span`
  font-size: 7rem;
  font-weight: 700;
  ${props =>
    props.blink &&
    css`
      animation: ${blinker} 0.5s linear infinite;
    `}
`;

const blinker = keyframes`
  50% {
    opacity: 0;
  }
`;
