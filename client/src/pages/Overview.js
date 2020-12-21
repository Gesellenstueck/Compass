import { useEffect, useState } from "react";
import { getResultsByQuestionID } from "../api/results";
import { getQuestions } from "../api/survey";
import { ResultContainer } from "../components/Card/CardResult";

import { useHistory } from "react-router-dom";
import { Header } from "../components/Header/Header";

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
    <>
      <Header title="This week's mood" />
      {overviewDoc.map((overviewDoc, index) => (
        <ResultContainer
          key={index}
          title={overviewDoc.questionDoc.question}
          value={overviewDoc.questionDoc.averageMood}
          scale={overviewDoc.scale}
        />
      ))}
    </>
  );
}

export default Overview;
