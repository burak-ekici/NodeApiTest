const mongoose = require('mongoose')

const PostsModel = mongoose.model(
  "node-API", //nom de la DB
  { // model pour chaque document
    author: {
      type:String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default : Date.now
    }
  },
  "posts" // selection de la table
);

module.exports = { PostsModel }