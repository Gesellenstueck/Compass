import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Teamicon } from "../../assets/icons/Team.svg";

const types = {
  teamBoard: {
    background: "var(--card-pink)",
    headline: "Team Board",
    icon: "teamicon",
  },
  yellow: {
    background: "var(--card-yellow)",
  },
  orange: {
    background: "var(--card-orange)",
  },
  rose: {
    background: "var(--card-rose)",
  },
};

const BoardCard = styled.div`
  border-radius: 1.875rem;
  text-transform: uppercase;

  background: ${(props) => types[props.type].background};
  text-align: center;
  svg {
    height: 20px;
    width: 20px;
  }
`;

/**
 * Primary UI component for user interaction
 *
 */
const Card = ({ type, size, label, ...props }) => {
  return (
    <BoardCard type={type}>
      {label}
      <Teamicon />
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
   * Hier die Auflistung der Farben, damit Storybook nicht abfuckt
   */
  type: PropTypes.oneOf(["teamBoard", "medium", "large"]),
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
