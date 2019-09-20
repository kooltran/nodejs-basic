const mongoose = require("mongoose");

const Post = require("./database/models/Post");

mongoose.connect("mongodb://127.0.0.1:27017/node-js-test-mongo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Post.find({}, (err, post) => console.log(err, post));

Post.findByIdAndUpdate(
  "5d833fc6641bf7336c7e6f3c",
  {
    title: "kakakakaka"
  },
  (err, post) => {
    console.log(err, post);
  }
);

// Post.create(
//   {
//     title: "My second title",
//     description: "My second description",
//     content: "Second Lorem ipsum"
//   },
//   (err, post) => {
//     console.log(err, post);
//   }
// );
