const express = require("express");

const router = express.Router();

let { people } = require("../data");

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//Javascript post
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(401)
      .json({ success: false, message: "Please privide name value" });
  }
  res.status(200).json({ success: true, person: name });
});

//Postman post
router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(401)
      .json({ success: false, message: "Please privide name value" });
  }
  res.status(200).json({ data: [...people, name] });
});

//PUT method
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res
      .status(404)
      .json({ success: false, message: `No person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, peopleDataset: newPeople });
});

//Delete method
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    res
      .status(404)
      .json({ success: false, message: `No person with id ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ success: true, peopleDataset: newPeople });
});

module.exports = router;
