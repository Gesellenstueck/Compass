const { collection } = require("./database");

async function insertUser(user) {
  return await collection("users").insertOne(user);
}

exports.insertUser = insertUser;
