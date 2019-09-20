const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("./database/models/Post");

mongoose.connect("mongodb://127.0.0.1:27017/node-js-post", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (request, response) => {
  const posts = await Post.find({});
  console.log(posts);
  response.sendFile(path.resolve(__dirname, "pages/index.html"));
});

app.get("/about", (request, response) => {
  response.sendFile(path.resolve(__dirname, "pages/about.html"));
});

app.get("/post", (request, response) => {
  response.sendFile(path.resolve(__dirname, "pages/post-form.html"));
});

app.post("/posts/store", (req, res) => {
  Post.create(req.body, (err, post) => {
    console.log(req.body, "req.body");
    res.redirect("/");
  });
});

app.listen(3000, () => console.log("App listening on port 3000"));
