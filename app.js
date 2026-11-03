const express = require("express");

const logger = require("./Express.js/middleware/logger");
const authorize = require("./Express.js/middleware/authorize");
const morgan = require("morgan");

const app = express();

//Third party middleware
app.use(morgan("tiny"));

//Our own middleware/express middleware/third party middleware

// request => middleware => response

//app.use([logger, authorize]); //This will apply the logger and authorize middleware to all routes
//app.use("/api", logger);

//Express static middleware to serve static files
//app.use(express.static("./Express.js/navbar-app"));

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

//Apply logger and authorize middleware to this specific route
app.get("/api/items", (req, res) => {
  // console.log(userInfo);
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
