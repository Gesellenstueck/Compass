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

exports.insertUser = insertUser;
exports.insertResult = insertResult;
exports.getQuestionDoc = getQuestionDoc;
exports.getQuestions = getQuestions;
exports.getResults = getResults;
