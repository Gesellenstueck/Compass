import { useEffect, useState } from "react";
import styled from "styled-components";
import { getResultsByQuestionID } from "../api/results";
import { getQuestions } from "../api/survey";
import { ResultContainer } from "../components/Card/CardResult";
import { Header } from "../components/Header/Header";

const Wrapper = styled.div`
  margin: 2rem 1.5rem;
`;

function Overview() {
  const [overviewDoc, setOverviewDoc] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const questionsArray = await getQuestions();

      const overviewDoc = await Promise.all(
        questionsArray.map(async (question) => {
          const scale = question.scale;
          const questionDoc = await getResultsByQuestionID(question._id);
          return { questionDoc, scale };
        })
      );
      setOverviewDoc(overviewDoc);
    };
    doFetch();
  }, []);

  return (
    <Wrapper>
      <Header title="This week's mood" />
      {overviewDoc.map((overviewDoc, index) => (
        <ResultContainer
          key={index}
          title={overviewDoc.questionDoc.question}
          value={overviewDoc.questionDoc.averageMood}
          scale={overviewDoc.scale}
        />
      ))}
    </Wrapper>
  );
}

export default Overview;
