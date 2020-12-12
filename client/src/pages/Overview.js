import { useEffect, useState } from "react";
import { getResults } from "../api/results";

function Overview() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      const results = await getResults();
      console.log(results[71].question);
      setQuestion(results[71].question);
      setAnswer(results[71].answer);
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
