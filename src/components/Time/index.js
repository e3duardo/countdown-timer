import React from "react";

import { Container } from "./styles";

export default function Time({ time, playing }) {
  return (
    <Container
      blink={playing && time <= "00:10"}
      danger={time <= "00:20" && time !== "00:00"}
    >
      {time}
    </Container>
  );
}
