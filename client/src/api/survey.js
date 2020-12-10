export async function getQuestionDoc(id) {
  const response = await fetch(`/api/questions/${id}`);
  const question = await response.json();
  console.log(question);
  return question;
}
