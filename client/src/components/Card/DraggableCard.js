import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components/macro";
import Draggable from "react-draggable";

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

const DragCard = styled.div`
  border-radius: 1.875rem;
  padding: 2rem;

  box-shadow: 6px 11px 15px 4px rgba(0, 0, 0, 0.2);

  display: inline-block;
  ${(props) => bgColors[props.bgColor]};
  textarea {
    border: none;
    background: var(--primaryLight);
    :focus {
    }
  }
`;

export const DraggableCard = ({ bgColor, label, textarea, ...props }) => {
  return (
    <Draggable bounds="parent">
      <DragCard bgColor={bgColor} {...props}>
        <h3>{label}</h3>

        <textarea placeholder="What's on your mind?"></textarea>
      </DragCard>
    </Draggable>
  );
};

DraggableCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "primaryDark",
    "secondaryDark",
    "primaryLight",
    "secondaryLight",
  ]),

  label: PropTypes.string,

  onClick: PropTypes.func,

  textarea: PropTypes.string,
};
