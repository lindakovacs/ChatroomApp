const express = require("express");
const app = express();

const bodyParser = require("body-parser");
// cont moment = require("moment");
let messages = [];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.put("/send", (req, res) => {
  messages.push({
    name: req.body.name,
    message: req.body.message,
    timestamp: new Date()
  });
  console.log(messages);
  res.send({ status: "ok" });
});

app.get("/receive", (req, res) => {
  res.send({ messages: messages });
});

app.listen(8080, "0.0.0.0", () => {
  console.log("Server is running");
});
