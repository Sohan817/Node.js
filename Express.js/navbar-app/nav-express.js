const express = require("express");

const path = require("path");

const app = express();

app.use(express.static("./Express.js/navbar-app"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./Express.js/navbar-app/index.html"));
//   Adding to static assets
//   Server side rendering(SSR)
// });
app.all("/*splat", (req, res) => {
  res.send("<h1>Resource not found</h1>");
});
app.listen(5000, () => {
  console.log("Server listening at 5000....");
});
