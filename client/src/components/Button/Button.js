import PropTypes from "prop-types";
import styled from "styled-components/macro";

const sizes = {
  small: {
    font: "Oxygen-Regular",
  },
  medium: {},
  large: {
    font: "Oxygen-Bold",
  },
};

const Button = styled.button`
  border-radius: 1.875rem;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
  color: var(--emphasis-color);
  background: var(--basic-color);
  padding: 0.4rem 0;
  font-family: ${(props) => sizes[props.size].font};
  :active {
    background: var(--emphasis-color);
    color: var(--basic-color);
  }
`;

/**
 * Primary UI component for user interaction
 */

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

  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: "medium",
};

export default Button;
