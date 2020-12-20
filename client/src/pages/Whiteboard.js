import { DraggableCard } from "../components/Card/DraggableCard";
import styled from "styled-components/macro";
import Addicon from "../assets/icons/Add.svg";
import React from "react";
import { useState } from "react";
import { Header } from "../components/Header/Header";

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
  const [cards, setCards] = useState(["Hallo"]);

  const addCard = () => {
    setCards([...cards, "Hallo"]);
  };

  return (
    <>
      <Header title="Team Board" />
      <Wrapper>
        {cards.map((index) => {
          return (
            <DraggableCard key={index} label="Hallo" bgColor="primaryDark" />
          );
        })}
        <img src={Addicon} alt="Add Icon" onClick={() => addCard()} />
      </Wrapper>
    </>
  );
}

export default Whiteboard;
