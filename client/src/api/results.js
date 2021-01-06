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

export async function getResults() {
  const response = await fetch(`/api/results/`);
  const questions = await response.json();

  return questions;
}

export async function getResultsByQuestionID(id) {
  const response = await fetch(`/api/results/question/${id}`);
  const results = await response.json();

  return results;
}

export async function checkUserId(userID) {
  const response = await fetch(`/api/results/user/${userID}`);
  const results = await response.json();

  return results;
}

export async function getResultAnswers() {
  const response = await fetch(`/api/results/`);
  const questions = await response.json();

  return questions;
}
