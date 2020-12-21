import { DraggableCard } from "../components/Card/DraggableCard";
import styled from "styled-components/macro";
import Addicon from "../assets/icons/Add.svg";
import React from "react";
import { useState } from "react";
import { Header } from "../components/Header/Header";

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
  const [cards, setCards] = useState(["primaryDark"]);

  const addCard = () => {
    const colors = [
      "primaryDark",
      "primaryLight",
      "secondaryDark",
      "secondaryLight",
    ];
    const randomNumber = Math.floor([Math.random() * 4]);
    setCards([...cards, colors[randomNumber]]);
  };

  return (
    <>
      <Header title="Team Board" />
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
