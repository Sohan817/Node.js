const express = require("express");

const app = express();

const { products } = require("./Express.js/data");

app.get("/", (request, response) => {
  response.json(products);
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000.....");
});
