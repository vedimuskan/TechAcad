const express = require("express");
const { route } = require("express/lib/application");

const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");
const Banner = require("../models/Banner");
const About = require("../models/About");

const routes = express.Router();

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "6494a09eacb7bc561ba4ad6e" });
  const slides = await Slider.find();
  //console.log(slides);
  //console.log(details);

  const services = await Service.find();
  const banner1 = await Banner.findOne({ _id: "64973c7555ae91ddd92b743e" });
  const banner2 = await Banner.findOne({ _id: "64973c7555ae91ddd92b743f" });
  const banner3 = await Banner.findOne({ _id: "64973c7555ae91ddd92b7440" });
  const about = await About.findOne({ _id: "64975aefe14ac98e57851f51" });

  res.render("index", {
    details: details,
    slides: slides,
    services: services,
    banner1: banner1,
    banner2: banner2,
    banner3: banner3,
    about: about,
  });
});

routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({ _id: "6494a09eacb7bc561ba4ad6e" });
  res.render("gallery", {
    details: details,
  });
});


routes.post("/process-contact-form", async (req, res) => {
  console.log("form is submitted");
  console.log(req.body);

  //save data to db

  try {
    const data = await Contact.create(req.body);
    console.log(data);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

module.exports = routes;
