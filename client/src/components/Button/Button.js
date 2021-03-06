import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Button = styled.button`
  border-radius: 1.875rem;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
  color: var(--emphasis-color);
  background: var(--basic-color);
  padding: 0.4rem 0;
  :active {
    background: var(--emphasis-color);
    color: var(--basic-color);
  }
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: "small",
};

export default Button;
