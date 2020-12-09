import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { getQuestionDoc } from "../api/survey";

import monsPinkSrc from "../assets/images/monsPink.svg";
import monsYellowSrc from "../assets/images/monsYellow.svg";
import SurveyButton from "../components/Button/SurveyButton";

const Wrapper = styled.div`
  display: block;
  height: 100vh;
  min-width: 100vw;
  position: fixed;
  overflow: hidden;
`;

const MonsPink = styled.img`
  position: absolute;
  z-index: -1;
  transform: rotate(30deg);
  bottom: -10%;
  left: -10%;
`;

const MonsYellow = styled.img`
  position: absolute;
  z-index: -1;
  transform: rotate(210deg);
  right: -10%;
  top: -10%;
`;

const QuestionBox = styled.div`
  display: grid;
  grid-template-columns: 12vw 11vw 10vw 9vw 10vw 11vw 12vw;
  grid-template-rows: auto auto auto;
  justify-content: center;
  align-items: center;
  grid-column-gap: 0.65rem;
  margin-top: 42.5vh;

  *:first-child {
    margin-bottom: 1rem;
  }
`;

const Question = styled.h2`
  margin: 0;
  grid-column: 1 / span 7;
  text-align: center;
`;

const Scale = styled.span`
  color: var(--emphasis-color);
  font-size: 1.3rem;
  grid-column-start: ${(props) => (props.value === "1" ? 1 : 7)};
  text-align: ${(props) => (props.value === "1" ? "left" : "right")};
  grid-row-start: 3;
  justify-self: center;
  margin-top: 0.5rem;
`;

function Survey() {
  const handleClick = () => {};

  const [questionDoc, setQuestionDoc] = useState({
    question: "",
    scale: ["", ""],
  });

  useEffect(() => {
    const doFetch = async () => {
      const questionDoc = await getQuestionDoc("5fd09e58342aac296ab18e06");

      setQuestionDoc(questionDoc);
    };
    doFetch();
  }, []);

  return (
    <Wrapper>
      <MonsYellow src={monsYellowSrc} />
      <QuestionBox>
        <Question>{questionDoc.question}</Question>
        {["large", "medium", "small", "mini", "small", "medium", "large"].map(
          (size, index) => (
            <SurveyButton key={index} size={size} onClick={handleClick} />
          )
        )}
        <Scale value="1">{questionDoc.scale[0]}</Scale>
        <Scale>{questionDoc.scale[1]}</Scale>
      </QuestionBox>
      <MonsPink src={monsPinkSrc} />
    </Wrapper>
  );
}

export default Survey;
