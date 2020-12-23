import { DraggableCard } from "../components/Card/DraggableCard";
import styled from "styled-components/macro";
import Addicon from "../assets/icons/Add.svg";
import React, { useReducer } from "react";
import { useState } from "react";
import { Header } from "../components/Header/Header";
import { initialState } from "../context/reducer";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const AddIcon = styled.img`
  position: fixed;
  left: 72%;
  bottom: 3%;
`;

const ACTIONS = {
  ADD: "add",
  EDIT: "edit",
  DELETE: "delete",
};

function reducer(cards, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [newCard(), ...cards];
    default:
      return cards;
  }
}

function newCard(label) {
  const colors = [
    "primaryDark",
    "primaryLight",
    "secondaryDark",
    "secondaryLight",
  ];
  const randomNumber = Math.floor([Math.random() * 4]);
  return { id: Date.now(), color: colors[randomNumber], label: label };
}

function Whiteboard() {
  const [cards, dispatch] = useReducer(reducer, []);

  function handleClick() {
    dispatch({ type: ACTIONS.ADD, payload: { color: "primaryDark" } });
    console.log(cards);
  }

  return (
    <>
      <Header title="Team Board" />
      <Wrapper>
        {cards.map((color) => {
          return (
            <DraggableCard key={color} label="Hallo" color={cards[0].color} />
          );
        })}
        <AddIcon
          src={Addicon}
          alt="Add Icon"
          onClick={() => handleClick()}
          dispatch={dispatch}
        />
      </Wrapper>
    </>
  );
}

export default Whiteboard;
