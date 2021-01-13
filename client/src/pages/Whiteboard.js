import { DraggableCard } from "../components/Card/DraggableCard";
import styled from "styled-components/macro";
import Addicon from "../assets/icons/Add.svg";
import React from "react";
import { useState } from "react";
import { Header } from "../components/Header/Header";

const Wrapper = styled.div`
  padding: 2rem 0 1rem 1.5rem;
  width: 100%;
  min-height: 100%;
  /* overflow: hidden; */
  position: fixed;
`;

const DraggableContainer = styled.div`
  padding-top: 6rem;
  width: 375px;
  height: 667px;
`;

const AddIcon = styled.img`
  position: fixed;
  left: 72%;
  bottom: 3%;
`;

function Whiteboard() {
  const [cards, setCards] = useState(["primaryDark"]);

  const addCard = () => {
    const colors = ["primaryDark", "primaryLight", "secondaryDark"];
    const randomNumber = Math.floor([Math.random() * 3]);
    setCards([...cards, colors[randomNumber]]);
  };

  return (
    <Wrapper>
      <Header title="Team Board" />
      <DraggableContainer>
        {cards.map((color) => {
          return <DraggableCard key={color} color={color} />;
        })}
        <AddIcon src={Addicon} alt="Add Icon" onClick={() => addCard()} />
      </DraggableContainer>
    </Wrapper>
  );
}

export default Whiteboard;
