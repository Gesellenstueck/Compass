import { useEffect, useState } from "react";
import { getResultAnswers, getResultsByQuestionID } from "../api/results";
import { getQuestions } from "../api/survey";
import { ResultContainer } from "../components/Card/CardResult";

function Overview() {
  const [overviewDoc, setOverviewDoc] = useState([]);
  const [scale, setScale] = useState([]);

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
      console.log(overviewDoc);
    };
    doFetch();
  }, []);

  return (
    <>
      <h2>{"This week's mood"}</h2>
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
