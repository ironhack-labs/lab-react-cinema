const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res) => {
  console.log('called');
  res.json({ message: 'index' });
});

router.get('/movies', (req, res) => {
  console.log('called');
  // res.json({ Movie });
  Movie.find()
    .then(movies => res.json(movies))
    .catch(error => console.log('An error happened while trying to collect data from database', error));
});

module.exports = router;
