const express = require("express");

const app = express();

const { products } = require("./Express.js/data");

app.get("/", (request, response) => {
  response.send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.get("/api/products/:productId", (req, res) => {
  //console.log(req.params);
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId),
  );
  if (!singleProduct) {
    res.status(404).send("Product does not exists");
  }
  res.json(singleProduct);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("Hello rewiew");
});
app.all("/*splat", (req, res) => {
  res.send("<h1>Resource not Found</1>");
});
app.listen(5000, () => {
  console.log("Server is listening at port 5000.....");
});
