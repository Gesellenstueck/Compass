export async function getQuestionDoc(id) {
  const response = await fetch(`/api/questions/${id}`);
  const question = await response.json();

  return question;
}

export async function getQuestions() {
  const response = await fetch(`/api/questions/`);
  const questions = await response.json();

  return questions;
}
