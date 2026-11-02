const express = require("express");

const logger = require("./Express.js/middleware/logger");

const app = express();

// request => middleware => response

//app.use(logger);
app.use("/api", logger);
//Reference logger function in the route handler as middleware
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
