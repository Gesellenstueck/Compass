import PropTypes from "prop-types";
import styled from "styled-components/macro";

const sizes = {
  mini: {
    height: "30px",
    width: "30px",
  },
  small: {
    height: "45px",
    width: "45px",
  },
  medium: {
    height: "60px",
    width: "60px",
  },
  large: {
    height: "75px",
    width: "75px",
  },
};

const Button = styled.button`
  border-radius: 50%;
  border: 3px solid var(--emphasis-color);
  background: none;
  height: ${(props) => sizes[props.size].height};
  width: ${(props) => sizes[props.size].width};
  :active {
    background-color: var(--emphasis-color);
  }
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),

  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: "medium",
};

export default Button;
