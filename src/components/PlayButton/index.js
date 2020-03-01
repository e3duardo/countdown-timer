import React from "react";
import PropTypes from "prop-types";

import pause from "../../assets/pause.svg";
import resume from "../../assets/resume.svg";
import { Container } from "./styles";

export default function PlayButton({ show, playing, onClick }) {
  if (!show) return null;
  return (
    <Container
      data-testid="play"
      src={playing ? pause : resume}
      alt={playing ? "pause" : "resume"}
      onClick={onClick}
    />
  );
}

PlayButton.propTypes = {
  show: PropTypes.bool,
  playing: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

PlayButton.defaultProps = {
  show: false,
  playing: false
};
