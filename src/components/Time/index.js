import React from "react";

import { Container } from "./styles";

export default function Time({ time, playing }) {
  return <Container blink={playing && time <= "00:10"}>{time}</Container>;
}
