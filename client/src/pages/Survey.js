import styled from "styled-components/macro";
import monsPinkSrc from "../assets/images/monstera-pink.svg";
import monsYellowSrc from "../assets/images/monstera-yellow.svg";
import SurveyButton from "../components/Button/SurveyButton";

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;
`;

const DecoPink = styled.div`
  background-image: url(${monsPinkSrc});
  grid-column-start: 2;
  grid-row-start: 1;
`;

const DecoYellow = styled.div`
  background-image: url(${monsYellowSrc});
  grid-column-start: 1;
  grid-row-start: 3;
`;

const QuestionBox = styled.div`
  grid-row-start: 2;
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: auto 1fr auto;

  button {
    grid-row-start: 2;
  }
`;

const Question = styled.h2`
  grid-column: 1 / span 7;
  text-align: center;
`;

function Survey() {
  return (
    <Wrapper>
      <DecoPink />
      <QuestionBox>
        <Question>How was your week?</Question>
        <SurveyButton />
        <SurveyButton />
        <SurveyButton />
        <SurveyButton size="small" />
        <SurveyButton />
        <SurveyButton />
        <SurveyButton />
      </QuestionBox>
      <DecoYellow />
    </Wrapper>
  );
}

export default Survey;
