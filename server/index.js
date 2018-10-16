require("dotenv").config();

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  port = process.env.PORT || 3005,
  session = require("express-session"),
  { getAllMessages, createMessage, getHistory } = require("./messagesCtrl");

app.use(bodyParser.json());
app.use(
  session({
    cookie: {
      maxAge: 100000
    },
    saveUninitialized: true,
    resave: false,
    secret: process.env.SECRET
  })
);

app.get("/api/messages", getAllMessages);
app.get("/api/history", getHistory);
app.post("/api/messages", createMessage);

app.listen(port, () => {
  console.log(`Listening @ port: ${port}`);
});
