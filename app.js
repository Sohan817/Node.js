const express = require("express");
const app = express();

let { people } = require("./Express.js/data");

app.use(express.static("./Express.js/methods-public"));

app.use(express.urlencoded({ extended: false }));

//Perse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//HTML form
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.send(`Welcome ${name}`);
  } else {
    res.status(404).send("Please provide name value");
  }
});

//Javascript post
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(401)
      .json({ success: false, message: "Please privide name value" });
  }
  res.status(200).json({ success: true, person: name });
});

//Postman post
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(401)
      .json({ success: false, message: "Please privide name value" });
  }
  res.status(200).json({ data: [...people, name] });
});

//PUT method
app.put("/api/people/:id", (req, res) => {
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
app.delete("/api/people/:id", (req, res) => {
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

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
