const express = require("express");

const app = express();

//const app = require("express")();

//app.get()
app.get("/", (req, res) => {
  console.log("User hit the home page..");
  res.status(200).send("Home Page");
});
app.get("/about", (req, res) => {
  console.log("User hit the About page..");
  res.status(200).send("About Page");
});

//app.all(),responsible for any url

app.all("/*splat", (req, res) => {
  console.log("User hit dummy link..");
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5000, () => {
  console.log("Server listenting at 5000....");
});
