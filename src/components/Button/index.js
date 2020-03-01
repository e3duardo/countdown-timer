import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default function Button({ color, label, active, onClick }) {
  return (
    <Container type="button" active={active} onClick={onClick} color={color}>
      {label}
    </Container>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary"])
};

Button.defaultProps = {
  active: false,
  onClick: () => {},
  color: "secondary"
};
