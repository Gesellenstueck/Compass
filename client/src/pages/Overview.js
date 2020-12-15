import { useEffect, useState } from "react";
import { getResultAnswers, getResultsByQuestionID } from "../api/results";
import { getQuestions } from "../api/survey";

function Overview() {
  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      const questionsArray = await getQuestions();
      const questionOne = questionsArray[0]._id;

      const results1 = await getResultsByQuestionID(questionOne);
      console.log(results1);

      /* questionsArray.map(() => console.log("1")); */

      setQuestion(questionsArray[0].question);
      setAnswer(results1[0].answer);
    };
    doFetch();
  }, []);

  return (
    <>
      <h2>{"This week's mood"}</h2>
      <h4>{question}</h4>
      <h4>{answer}</h4>
    </>
  );
}

export default Overview;
