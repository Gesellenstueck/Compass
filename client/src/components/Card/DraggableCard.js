import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Draggable from "react-draggable";
import { ReactComponent as Chat } from "../../assets/icons/Comment.svg";
import { ReactComponent as Heart } from "../../assets/icons/love.svg";
import { useState } from "react";

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
`;

const CardContainer = styled.section`
  textarea {
    font-family: "OxygenRegular";
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    color: var(--basic-color);
    ::placeholder {
      color: var(--basic-color);
    }
    border: none;
    background: none;
    margin-bottom: 1rem;
  }
`;

const IconContainer = styled.div`
  display: flex;

  svg {
    fill: ${(props) => colors[props.color].fill};
    height: 22px;
    width: 22px;
    margin-right: 8px;
  }

  span {
    margin-right: 15px;
  }
`;

export const DraggableCard = ({ color, label, textarea, ...props }) => {
  const [count, setCount] = useState(null);
  const [placeholder, setPlaceholder] = useState("What's on your mind?");

  return (
    <Draggable bounds="parent" cancel={"section"}>
      <DragCard color={color} {...props}>
        <CardContainer>
          <textarea
            placeholder={placeholder}
            onFocus={() => setPlaceholder("")}
            spellCheck="false"
          ></textarea>
          <IconContainer color={color}>
            <Heart onClick={() => setCount(count + 1)} />
            {count && <span>{count}</span>}
            <Chat />
          </IconContainer>
        </CardContainer>
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
