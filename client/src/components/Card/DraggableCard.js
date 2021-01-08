import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Draggable from "react-draggable";
import { ReactComponent as Chat } from "../../assets/icons/Comment.svg";
import { ReactComponent as Heart } from "../../assets/icons/love.svg";

const colors = {
  primaryDark: {
    background: "var(--primaryDark)",
    fill: "var(--primaryLight)",
  },
  secondaryLight: {
    background: "var(--secondaryLight)",
    fill: "var(--secondaryDark)",
  },
  secondaryDark: {
    background: "var(--secondaryDark)",
    fill: "var(--secondaryLight)",
  },
  primaryLight: {
    background: "var(--primaryLight)",
    fill: "var(--primaryDark)",
  },
};

const DragCard = styled.div`
  border-radius: 1.875rem;
  padding: 2rem;

  h3 {
    text-shadow: ${(props) =>
      props.color === "secondaryLight" ? "0 0 7.5px rgba(255,192,87)" : "none"};
    input {
      background: none;
    }
  }

  box-shadow: 6px 11px 15px 4px rgba(0, 0, 0, 0.2);

  display: inline-block;
  background: ${(props) => colors[props.color].background};
  textarea {
    border: none;
    background: none;
    margin-bottom: 2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;

  svg {
    fill: ${(props) => colors[props.color].fill};
    height: 22px;
    width: 22px;
    margin-right: 5px;
  }
`;

export const DraggableCard = ({ color, label, textarea, ...props }) => {
  return (
    <Draggable bounds="parent" cancel={"textarea"}>
      <DragCard color={color} {...props}>
        <textarea placeholder="What's on your mind?"></textarea>

        <IconContainer color={color}>
          <Heart />
          <Chat />
        </IconContainer>
      </DragCard>
    </Draggable>
  );
};

DraggableCard.propTypes = {
  color: PropTypes.oneOf([
    "primaryDark",
    "secondaryDark",
    "primaryLight",
    "secondaryLight",
  ]),

  label: PropTypes.string,

  onClick: PropTypes.func,

  textarea: PropTypes.string,
};
