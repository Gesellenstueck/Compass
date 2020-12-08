import styled from "styled-components/macro";
import monsPinkSrc from "../assets/images/monstera-pink.svg";
import monsYellowSrc from "../assets/images/monstera-yellow.svg";
import SurveyButton from "../components/Button/SurveyButton";

const Wrapper = styled.div`
  display: block;
  height: 100vh;
`;

const MonsPink = styled.img`
  grid-column-start: 1;
  grid-row-start: 3;
  /* position: relative;
top: 102%;
left: -20%; */
`;

const MonsYellow = styled.img`
  grid-column-start: 3;
  grid-row-start: 1;
  /* position: absolute;
  top: -20%;
  left: 102%; */
`;

const QuestionBox = styled.div`
  display: grid;
  grid-template-columns: 12vw 11vw 10vw 9vw 10vw 11vw 12vw;
  grid-template-rows: auto auto auto;
  justify-content: center;
  align-items: center;
  grid-column-gap: 0.65rem;
  margin-top: 50vh;

  *:first-child {
    margin-bottom: 1rem;
  }

  *:last-child {
    margin-top: 0.5rem;
  }
`;

const Question = styled.h2`
  margin: 0;
  grid-column: 1 / span 7;
  justify-self: center;
`;

const Scale = styled.span`
  color: var(--emphasis-color);
  font-size: 1.3rem;
  grid-column-start: ${(props) => (props.value === "1" ? 1 : 7)};
  text-align: ${(props) => (props.value === "1" ? "left" : "right")};
`;

function Survey() {
  return (
    <Wrapper>
      {/* <MonsYellow src={monsYellowSrc} /> */}
      <QuestionBox>
        <Question>How was your week?</Question>
        <SurveyButton size="large" />
        <SurveyButton size="medium" />
        <SurveyButton size="small" />
        <SurveyButton size="mini" />
        <SurveyButton size="small" />
        <SurveyButton size="medium" />
        <SurveyButton size="large" />
        <Scale value="1">Great</Scale>
        <Scale>Bad</Scale>
      </QuestionBox>
      {/* <MonsPink src={monsPinkSrc} /> */}
    </Wrapper>
  );
}

export default Survey;
