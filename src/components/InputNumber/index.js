import React from "react";

import { Container } from "./styles";

export default function InputNumber({ placeholder, innerRef }) {
  function handleChange(e) {
    if (e.target.value < 0) {
      e.target.value = "";
    }
  }

  return (
    <Container
      type="number"
      placeholder={placeholder}
      ref={innerRef}
      onChange={e => handleChange(e)}
    />
  );
}
