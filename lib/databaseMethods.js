const { ObjectID } = require("mongodb");
const { collection } = require("./database");

async function insertUser(user) {
  return await collection("users").insertOne(user);
}

async function getQuestion(id) {
  const objectId = new ObjectID.createFromHexString(id);
  return await collection("survey").findOne({ _id: objectId });
}

exports.insertUser = insertUser;
exports.getQuestion = getQuestion;
