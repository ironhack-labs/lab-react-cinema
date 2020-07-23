const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/movies", (req, res) => {
  console.log("called");
  Movie.find({}).then((movies) => {
    res.json({ movies });
  });
});

router.get("/", (req, res) => {
  console.log("called");
  res.json({ message: "success" });
});

module.exports = router;
