const express = require("express");
const path = require("path");
const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../template/views"); //callpublic dir

app.use(express.static(publicDirPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);


app.get("/", function (req, res) {
  res.render("Register");
});

app.get("/", function (req, res) {
  res.render("Home");
});

app.get("/", function (req, res) {
  res.render("Admin");
});

app.get("/", function (req, res) {
  res.render("Vendor");
});

app.get("/", function (req, res) {
  res.render("user");
});

app.get("/", function (req, res) {
  res.render("Product");
});


app.get("/", function (req, res) {
  res.render("Ad");
});

app.get("/", function (req, res) {
  res.render("Tickets");
});

app.listen(7000, function () {
  console.log("The server is up on port 7000");
});
