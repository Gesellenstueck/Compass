import { DraggableCard } from "../components/Card/DraggableCard";
import Back from "../assets/icons/Back.svg";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import Addicon from "../assets/icons/Add.svg";
import React from "react";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const AddIcon = styled.img`
  position: fixed;
  left: 72%;
  bottom: 3%;
`;

function Whiteboard() {
  const history = useHistory();
  const [cards, setCards] = useState(["primaryLight"]);

  const addCard = () => {
    setCards([...cards, "primaryDark"]);
  };

  return (
    <>
      <img src={Back} alt="Back Button" onClick={() => history.goBack()} />
      <h2>Team Board</h2>
      <Wrapper>
        {cards.map((color) => {
          return <DraggableCard key={color} label="Hallo" color={color} />;
        })}
        <AddIcon src={Addicon} alt="Add Icon" onClick={() => addCard()} />
      </Wrapper>
    </>
  );
}

export default Whiteboard;
