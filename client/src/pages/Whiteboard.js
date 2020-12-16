import Draggable from "react-draggable";
import { DraggableCard } from "../components/Card/DraggableCard";
import Back from "../assets/icons/Back.svg";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import Addicon from "../assets/icons/Add.svg";
import React from "react";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;

  img {
    position: fixed;
    left: 72%;
    bottom: 3%;
  }
`;

function Whiteboard() {
  const history = useHistory();
  return (
    <>
      <img src={Back} alt="Back Button" onClick={() => history.goBack()} />
      <h2>Team Board</h2>
      <Wrapper>
        <Draggable bounds="parent">
          <DraggableCard label="Hallo" bgColor="primaryDark"></DraggableCard>
        </Draggable>

        <img
          src={Addicon}
          alt="Add Icon"
          onClick={() => React.createElement(DraggableCard)}
        />
      </Wrapper>
    </>
  );
}

export default Whiteboard;
