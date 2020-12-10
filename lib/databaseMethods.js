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

exports.insertUser = insertUser;
exports.insertResult = insertResult;
exports.getQuestionDoc = getQuestionDoc;
