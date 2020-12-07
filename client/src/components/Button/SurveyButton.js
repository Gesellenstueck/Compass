import PropTypes from "prop-types";
import styled from "styled-components/macro";

const sizes = {
  small: {
    height: "50px",
    width: "50px",
  },
  medium: {
    height: "75px",
    width: "75px",
  },
  large: {
    height: "100px",
    width: "100px",
  },
};

const Button = styled.button`
  border-radius: 50%;
  border: 1px solid var(--emphasis-color);
  background: none;
  margin: 0.2rem;
  height: ${(props) => sizes[props.size].height};
  width: ${(props) => sizes[props.size].width};
  :active {
    background-color: var(--emphasis-color);
  }
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(["small", "medium", "large"]),

  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: "medium",
};

export default Button;
