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

router.get("/movies/:id", (req, res) => {
  console.log("called", req.params.id);
  Movie.findById(req.params.id).then((movie) => {
    res.json({ movie });
  });
});

router.get("/", (req, res) => {
  console.log("called");
  res.json({ message: "success" });
});

router.post("/NewMovie", (req, res) => {
  console.log(req.body, "sdfjsldkfj");
  Movie.create(req.body).then((movie) => {
    res.json({ movie });
  });
});
module.exports = router;
