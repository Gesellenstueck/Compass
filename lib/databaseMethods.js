const { ObjectID } = require("mongodb");
const { collection } = require("./database");

async function insertUser(user) {
  return await collection("users").insertOne(user);
}

async function insertResult(answer) {
  return await collection("results").insertOne(answer);
}

async function getQuestionDoc(id) {
  const objectId = new ObjectID.createFromHexString(id);
  return await collection("questions").findOne({ _id: objectId });
}

async function getQuestions() {
  const cursor = collection("questions").find();
  return await cursor.toArray();
}

async function getResults() {
  const cursor = collection("results").find();
  return await cursor.toArray();
}
async function getResultsByQuestionID(id) {
  const result = await collection("results")
    .find({ id: id }, { projection: { answer: 1, question: 1, _id: 0 } })
    .toArray();
  const question = result[0].question;
  const formattedResult = result.map((answer) => {
    return answer.answer;
  });
  const resultsSum = formattedResult.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  const averageMood = Math.floor(
    (resultsSum / formattedResult.length / 7) * 100
  );

  const averageMoodInDecimal = resultsSum / formattedResult.length;
  const averageMoodInDecimalRounded =
    Math.round(averageMoodInDecimal * 10) / 10;

  return { averageMood, question, averageMoodInDecimalRounded };
}

async function checkUserID(id) {
  const results = await collection("results")
    .find({ userID: id }, { projection: { date: 1, userID: 1 } })
    .toArray();

  /* const result = results[7]; */

  return results;
}

exports.insertUser = insertUser;
exports.insertResult = insertResult;
exports.getQuestionDoc = getQuestionDoc;
exports.getQuestions = getQuestions;
exports.getResults = getResults;
exports.checkUserID = checkUserID;
exports.getResultsByQuestionID = getResultsByQuestionID;
