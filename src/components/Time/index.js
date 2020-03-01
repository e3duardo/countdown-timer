import React from "react";
import PropTypes from "prop-types";

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

Time.propTypes = {
  time: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired
};
