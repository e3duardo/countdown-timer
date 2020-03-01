import React from "react";
import PropTypes from "prop-types";

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

InputNumber.propTypes = {
  placeholder: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

InputNumber.defaultProps = {
  placeholder: "",
  innerRef: null
};
