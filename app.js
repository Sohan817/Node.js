const express = require("express");
const peopleRouter = require("./Express.js/router/people");
const authRouter = require("./Express.js/router/auth");
const app = express();

app.use(express.static("./Express.js/methods-public"));

app.use(express.urlencoded({ extended: false }));

//Perse json
app.use(express.json());

//People router
app.use("/api/people", peopleRouter);

//Auth router
app.use("/login", authRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
