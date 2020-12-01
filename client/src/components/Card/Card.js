import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const types = {
  teamBoard: {
    background: "var(--card-pink)",
  },
  yellow: {
    background: "var(--card-yellow)",
  },
  orange: {
    background: "var(--card-orange)",
  },
  privateBoard: {
    background: "var(--card-rose)",
  },
};

const BoardCard = styled.div`
  border-radius: 1.875rem;
  padding: 2rem;

  box-shadow: 6px 11px 15px 4px rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-columns: auto 5% 1fr;
  grid-template-rows: auto 1fr;
  background: ${(props) => types[props.type].background};

  img {
    align-self: center;
    grid-column-start: 3;
    max-width: 42px;
    max-height: 44px;
  }
  h4 {
    grid-column: span 3;
    grid-row-start: 2;
    align-self: end;
  }
`;

const Card = ({ type, size, label, imgSrc, alt, ...props }) => {
  return (
    <BoardCard type={type}>
      <h2>{label}</h2>

      <img src={imgSrc} alt={alt} />

      <h4>Marie Groß, Lucas Naas...</h4>
    </BoardCard>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(["teamBoard", "medium", "large"]),

  size: PropTypes.oneOf(["small", "medium", "large"]),

  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,

  imgSrc: PropTypes.string,

  alt: PropTypes.string,
};

BoardCard.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export default Card;
