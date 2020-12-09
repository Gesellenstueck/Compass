/* export async function getQuestionById(id) {
  const response = await fetch(`http://localhost:5000/survey/${id}`);
  const question = await response.json();
  return question;
} */

export async function getQuestionDoc(id) {
  const response = await fetch(`/api/survey/${id}`);
  const question = await response.json();
  console.log(question);
  return question;
}

/* export async function getDataByID({ collectionName, id }) {
  const result = await fetch(`/api/${collectionName}/${id}`);
  const data = await result.json();
  return data;
}

 */
