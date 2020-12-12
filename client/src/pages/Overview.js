import { useEffect } from "react";
import { getResults } from "../api/results";

function Overview() {
  useEffect(() => {
    const doFetch = async () => {
      const results = await getResults();
      console.log(results);
    };
    doFetch();
  }, []);

  return (
    <>
      <h2>This weeks mood</h2>
    </>
  );
}

export default Overview;
