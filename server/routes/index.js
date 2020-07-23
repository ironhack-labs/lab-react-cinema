const express = require("express");
const Movies = require("../models/Movie");
const router = express.Router();

/* GET home page */
router.get("/", (req, res) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/", (req, res) => {
  Movies.find().then((movies) => {
    res.json(movies);
  });
});

module.exports = router;
