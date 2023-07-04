const mongoose = require("mongoose");

const Service = mongoose.Schema({
  icon: String,
  title: String,
  description: String,
  linkText1: String,
  link1: String,
  linkText2: String,
  link2: String,
});

module.exports = mongoose.model("services", Service);
