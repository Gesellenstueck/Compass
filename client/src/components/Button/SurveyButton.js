import PropTypes from "prop-types";
import styled from "styled-components/macro";

const sizes = {
  mini: {
    padding: "4.5vw",
  },
  small: {
    padding: "5vw",
  },
  medium: {
    padding: "5.5vw",
  },
  large: {
    padding: "6vw",
  },
};

const SurveyButton = styled.button`
  border-radius: 50%;
  border: 3px solid var(--emphasis-color);
  background: none;
  padding: ${(props) => sizes[props.size].padding};
  :active {
    background-color: var(--emphasis-color);
  }
`;

SurveyButton.propTypes = {
  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),

  onClick: PropTypes.func,
};

export default SurveyButton;
