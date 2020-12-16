import { useEffect, useState } from "react";
import { getResultAnswers, getResultsByQuestionID } from "../api/results";
import { getQuestions } from "../api/survey";
import { ResultContainer } from "../components/Card/CardResult";

function Overview() {
  const [overviewDoc, setOverviewDoc] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const questionsArray = await getQuestions();

      const overviewDoc = await Promise.all(
        questionsArray.map(async (question) => {
          const hello4 = await getResultsByQuestionID(question._id);
          return hello4;
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
      {overviewDoc.map((question, index) => (
        <ResultContainer
          key={index}
          title={question.question}
          value={question.averageMood}
        />
      ))}
    </>
  );
}

export default Overview;
