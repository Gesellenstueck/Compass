import { useEffect, useState } from "react";
import { getResultsByQuestionID } from "../api/results";
import { getQuestions } from "../api/survey";
import { ResultContainer } from "../components/Card/CardResult";
import Back from "../assets/icons/Back.svg";
import { useHistory } from "react-router-dom";

function Overview() {
  const history = useHistory();
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
      <img src={Back} alt="Back Button" onClick={() => history.goBack()} />

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
