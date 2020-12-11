export async function postResult(answer) {
  const response = await fetch("/api/results", {
    method: "POST",
    body: JSON.stringify(answer),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
