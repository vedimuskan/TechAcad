const mongoose = require("mongoose");

const About = mongoose.Schema({
  heading: String,
  para: String,
  button: String,
});

module.exports = mongoose.model("about", About);
