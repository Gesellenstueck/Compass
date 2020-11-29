import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const backgroundColors = {
  pink: {
    background: "var(--card-pink)",
  },
};

const BoardCard = styled.div`
  border-radius: 1.875rem;
  text-transform: uppercase;
  color: var(--emphasis-color);
  background: ${(props) => backgroundColors[props.backgroundColor].background};
  text-align: center;

  :active {
    background: var(--emphasis-color);
    color: var(--basic-color);
  }
`;

/**
 * Primary UI component for user interaction
 *
 */
const Card = ({ backgroundColor, size, label, ...props }) => {
  return (
    <BoardCard backgroundColor={backgroundColor}>
      {label}
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.{" "}
      </p>
    </BoardCard>
  );
};

Card.propTypes = {
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

BoardCard.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default Card;
