const express = require("express");

const {
  getPeople,
  createPeople,
  createPeoplePostman,
  updatePeople,
  deletePeople,
} = require("../controllers/people");

const router = express.Router();

// router.get("/", getPeople);

// //Javascript post
// router.post("/", createPeople);

// //Postman post
// router.post("/postman", createPeoplePostman);

// //PUT method

// router.put("/:id", updatePeople);

// //Delete method
// router.delete("/:id", deletePeople);

//OR
router.route("/").get(getPeople).post(createPeople);
router.route("/postman").post(createPeoplePostman);
router.route("/:id").put(updatePeople).delete(deletePeople);

module.exports = router;
