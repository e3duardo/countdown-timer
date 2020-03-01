import React from "react";

import pause from "../../assets/pause.svg";
import resume from "../../assets/resume.svg";
import { Container } from "./styles";

export default function PlayButton({ show, playing, onClick }) {
  if (!show) return null;
  return (
    <Container
      src={playing ? pause : resume}
      alt={playing ? "pause" : "resume"}
      onClick={onClick}
    />
  );
}
