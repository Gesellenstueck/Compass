require("dotenv").config();
const express = require("express");

const path = require("path");

const { connectToDb } = require("./lib/database");
const {
  insertUser,
  getQuestionDoc,
  insertResult,
  getQuestions,
  getResults,
  getResultByID,
} = require("./lib/databaseMethods");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("/api/questions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const questionDoc = await getQuestionDoc(id);
    res.send(questionDoc);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

app.get("/api/questions/", async (req, res) => {
  try {
    const questions = await getQuestions();
    res.send(questions);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

app.get("/api/results/:id", async (req, res) => {
  try {
    const results = await getResultByID();
    res.send(results);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

app.get("/api/results/", async (req, res) => {
  try {
    const results = await getResults();
    res.send(results);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/api/users", async (req, res) => {
  try {
    const user = req.body;
    await insertUser(user);
    res.send("New User posted into database.");
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

app.post("/api/results", async (req, res) => {
  try {
    const answer = req.body;
    await insertResult(answer);
    res.send("Answer posted into Database");
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

async function run() {
  console.log("Connecting to Database");
  await connectToDb(process.env.DB_URL, process.env.DB_NAME);
  console.log("Connected to Database!");

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

run();
