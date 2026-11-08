const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.send(`Welcome ${name}`);
  } else {
    res.status(404).send("Please provide name value");
  }
});

module.exports = router;
