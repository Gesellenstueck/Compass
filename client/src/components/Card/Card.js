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
  padding: 5%;

  display: grid;
  grid-template-columns: auto 5% 1fr;
  grid-template-rows: auto 1fr;
  background: ${(props) => types[props.type].background};

  svg {
    align-self: center;
    grid-column-start: 3;
  }
  h4 {
    grid-column: span 3;
    grid-row-start: 2;
    align-self: end;
  }
  //test
`;

const Card = ({ type, size, label, ...props }) => {
  return (
    <BoardCard type={type}>
      <h2>{label}</h2>
      <Teamicon />

      <h4>Marie Groß, Lucas Naas...</h4>
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
