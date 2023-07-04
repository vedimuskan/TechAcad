const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const routes = require("./routes/main");

const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const Banner = require("./models/Banner");
const About = require("./models/About");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/static", express.static("public"));
app.use("", routes);

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// MongoDB connection options
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/xyz", mongoOptions)
  .then(() => {
    console.log("MongoDB connected");

    // Service.create([
    //   {
    //     icon: "fa-solid fa-paperclip",
    //     title: "Provide Best Courses",
    //     description:
    //       "We provide best courses that help our students in learning their subject",
    //     linkText1: "Check",
    //     link1: "smthng1",
    //     linkText2: "Support",
    //     link2: "smthng2",
    //   },
    //   {
    //     icon: "fa-solid fa-clipboard",
    //     title: "Things We Do",
    //     description:
    //       "There are an ample number of things we do and workshops we conduct. Find out more below",
    //     linkText1: "Learn More",
    //     link1: "smthng1",
    //     linkText2: "About Us",
    //     link2: "smthng2",
    //   },
    //   {
    //     icon: "fa-solid fa-alarm-clock",
    //     title: "Get Regular Reminders",
    //     description:
    //       "Stay on track with your schedule and complete all the things on your to-do list with regular reminders from us",
    //     linkText1: "SetUp",
    //     link1: "smthng1",
    //     linkText2: "learn More",
    //     link2: "smthng2",
    //   }
    // ]);

    // Slider.create([
    //   {
    //     title: "Learn JAVA in easy way",
    //     subTitle: "JAVA is one of the most popular programming language",
    //     imageUrl: "/static/images/s1.jpg",
    //     class: "active",
    //   },
    //   {
    //     title: "What is DJango in Python",
    //     subTitle:
    //       "DJango is one of the most famous web framework of python programming",
    //     imageUrl: "/static/images/s2.jpg",
    //     class: "",
    //   },
    //   {
    //     title: "Let's learn NodeJS together",
    //     subTitle:
    //       "NodeJS is runtime environment to execute Javascript outside browser",
    //     imageUrl: "/static/images/s3.jpg",
    //     class: "",
    //   },
    // ]);

    // Banner.create([
    //   {
    //     bannerHeading: "Start learning New Tech Here",
    //     bannerPara:
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribusconsequatur vero nobis earum aspernatur nesciunt culpa numquam. Odiinventore rem laudantium corporis commodi, fugiat impedit! Eaquesuscipit possimus earum voluptatibus.",
    //     bannerButton: "Start Learning",
    //     bannerImg: "",
    //   },
    //   {
    //     bannerHeading: "Start learning New Tech Here- 2",
    //     bannerPara:
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribusconsequatur vero nobis earum aspernatur nesciunt culpa numquam. Odiinventore rem laudantium corporis commodi, fugiat impedit! Eaquesuscipit possimus earum voluptatibus.",
    //     bannerButton: "Start Learning-2",
    //     bannerImg: "",
    //   },
    //   {
    //     bannerHeading: "Start learning New Tech Here- 3",
    //     bannerPara:
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribusconsequatur vero nobis earum aspernatur nesciunt culpa numquam. Odiinventore rem laudantium corporis commodi, fugiat impedit! Eaquesuscipit possimus earum voluptatibus.",
    //     bannerButton: "Start Learning- 3",
    //     bannerImg: "",
    //   },
    // ]);

    // Detail.create({
    //   brandName: "Info Tech Solution",
    //   brandIconUrl: "/static/images/icon.png",
    //   links: [
    //     {
    //       label: "Home",
    //       url: "/",
    //     },
    //     {
    //       label: "Services",
    //       url: "/services",
    //     },
    //     {
    //       label: "Gallery",
    //       url: "/gallery",
    //     },
    //     {
    //       label: "About",
    //       url: "/about",
    //     },
    //     {
    //       label: "Contact Us",
    //       url: "/contact-us",
    //     },
    //   ],
    // });
    // Start the server after successful database connection

    // About.create([
    //   {
    //     heading: "About Us",
    //     para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, magnamaliquid ex eligendi repudiandae adipisci mollitia facilis? Similiquerepellendus veritatis harum expedita numquam dolorum dignissimoslaudantium consequuntur, nisi, ea placeat. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Harum ab voluptatem quidem ratione,totam est possimus, vero aperiam adipisci inventore ea illo doloripsum veritatis! Dolores enim modi aperiam sequi.",
    //     button: "Contact Us",
    //   },
    // ]);

    app.listen(process.env.PORT || 3000, () => {
      console.log("Server started");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
