import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const sizes = {
  small: {
    width: "30vw",
    height: "1rem",
  },
  medium: {},
  large: {
    width: "40vw",
    height: "2rem",
  },
};

const SubmitButton = styled.button`
  border-radius: 1.875rem;
  text-transform: uppercase;
  color: var(--emphasis-color);
  background: var(--basic-color);
  :active {
    background: var(--emphasis-color);
    color: var(--basic-color);
  }
  width: ${(props) => sizes[props.size].width};
  height: ${(props) => sizes[props.size].height};
`;

/**
 * Primary UI component for user interaction
 */
const Button = ({ backgroundColor, size, label, ...props }) => {
  return <SubmitButton size={size}>{label}</SubmitButton>;
};

Button.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default Button;
