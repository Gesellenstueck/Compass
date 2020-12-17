import { DraggableCard } from "../components/Card/DraggableCard";
import Back from "../assets/icons/Back.svg";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import Addicon from "../assets/icons/Add.svg";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

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
  const [cards, setCards] = useState([]);
  const [carsArray, setCardsArray] = useState([]);

  useEffect(() => {
    console.log("render");
  }, [cards]);

  const createCard = () => {
    for (let i = 0; ; i++) {
      let cardsArray = ["0"];
      cardsArray.push(i);
      console.log(cardsArray);
    }

    // const card = this.state.cardArray;
    // const key = "";
    // const props = "";
    // card.push({ key, ...props });
    // this.setState({ cardArray: card });
  };

  // const cardsArray = []
  // cardsArray.push(DraggableCard)

  return (
    <>
      <img src={Back} alt="Back Button" onClick={() => history.goBack()} />
      <h2>Team Board</h2>
      <Wrapper>
        {cards.map((index) => {
          return (
            <DraggableCard key={index} label="Hallo" bgColor="primaryDark" />
          );
        })}
        <img
          src={Addicon}
          alt="Add Icon"
          onClick={(key, props) => createCard(key, props)}
        />
      </Wrapper>
    </>
  );
}

export default Whiteboard;
