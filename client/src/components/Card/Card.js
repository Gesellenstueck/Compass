import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components/macro";

const bgColors = {
  primaryDark: css`
    background: var(--primaryDark);
  `,

  secondaryLight: css`
    background: var(--secondaryLight);
  `,
  secondaryDark: css`
    background: var(--secondaryDark);
  `,
  primaryLight: css`
    background: var(--primaryLight);
  `,
};

const BoardCard = styled.div`
  border-radius: 1.875rem;
  padding: 2rem;

  box-shadow: 6px 11px 15px 4px rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-columns: auto 5% 1fr;
  grid-template-rows: auto 1fr;
  ${(props) => bgColors[props.bgColor]};
  opacity: ${(props) => (props.isDisabled ? "0.6" : "")};

  img {
    align-self: center;
    grid-column-start: 3;

    max-width: 44px;
    max-height: 44px;
  }
  span {
    grid-column: span 3;
    grid-row-start: 2;
    align-self: end;
    margin: 1.5rem 0 0 0;
  }
  h2 {
    margin: 0;
  }
`;

export const Card = ({
  bgColor,
  label,
  imgSrc,
  alt,
  subline,
  isDisabled,
  ...props
}) => {
  return (
    <BoardCard bgColor={bgColor} isDisabled={isDisabled} {...props}>
      {isDisabled ? <h3>Already completed</h3> : <h3>{label}</h3>}

      <img src={imgSrc} alt={alt} />

      <span>{subline}</span>
    </BoardCard>
  );
};

Card.propTypes = {
  bgColor: PropTypes.oneOf([
    "primaryDark",
    "secondaryDark",
    "primaryLight",
    "secondaryLight",
  ]),

  label: PropTypes.string,

  onClick: PropTypes.func,

  imgSrc: PropTypes.string,

  alt: PropTypes.string,

  subline: PropTypes.string,

  isDisabled: PropTypes.bool,

  iconProps: PropTypes.oneOf(["teamIcon"]),
};

//AddCard

const AddContainer = styled.div`
  border-radius: 1.875rem;
  padding: 2rem;

  box-shadow: 6px 11px 15px 4px rgba(0, 0, 0, 0.2);

  ${(props) => bgColors[props.bgColor]};

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const AddCard = ({ bgColor, imgSrc, alt, ...props }) => {
  return (
    <AddContainer bgColor={bgColor} {...props}>
      <img src={imgSrc} alt={alt} />
    </AddContainer>
  );
};

AddCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "primaryDark",
    "secondaryDark",
    "primaryLight",
    "secondaryLight",
  ]),

  label: PropTypes.string,

  onClick: PropTypes.func,

  imgSrc: PropTypes.string,

  alt: PropTypes.string,

  subline: PropTypes.string,

  iconProps: PropTypes.oneOf(["teamIcon"]),
};
