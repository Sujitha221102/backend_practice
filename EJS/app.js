const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const { engine } = require("express-handlebars");

app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", engine({ extname: ".hbs", defaultLayout: false }));

app.set("view engine", "hbs");

router.get("/", (req, res) => {
  courses = ["html", "css", "js", "react"];
  res.status(200).render("index", {
    docTitle: "Welcome to Suji code",
    courses,
    path: "home",
    courseExists: courses.length > 0,
  });
});
router.get("/about", (req, res) => {
  const courses = ["PHP", "Laravel", "Angular", "React", "Node.js"];
  res.status(200).render("about", {
    active: "about",
    docTitle: "",
    courses,
    path: "about",
    courseExists: courses.length > 0,
    pageAbout: true,
  });
});

router.use((req, res, next) => {
  res.status(200).render("404", {
    docTitle: "404 Page not found",
    path: "404",
    page404: true,
  });
});

app.use(router);

app.listen(2200, () => {
  console.log("Running on 2200");
});
