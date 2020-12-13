import { useEffect, useState } from "react";
import { getResults, getResultByID } from "../api/results";
import { getQuestions } from "../api/survey";

function Overview() {
  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      const questionsArray = await getQuestions();
      console.log(questionsArray[0].question);
      /* questionsArray.map(() => console.log("1")); */
      const results = await getResults();

      setQuestion(questionsArray[0].question);
      setAnswer(results[0].answer);
      const results1 = await getResultByID("Naasgul");
      console.log(results1);
      const results2 = await getResultByID("mgross");
      console.log(results2);
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
