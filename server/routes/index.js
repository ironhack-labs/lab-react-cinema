const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res) => {
  console.log('called');
  res.json({ message: 'index' });
});

router.get('/get-movies', (req,res) => {
  Movie.find().then((movies) => {
    res.json(movies)
  })
})

router.get('/movie/:id', (req,res) => {
  Movie.findById(req.params.id).then(movie => {
    res.json(movie)
  })
})

router.post('/movie/new', (req, res, next) => {
  Movie.create(req.body).then(newMovie => console.log(newMovie))
})


module.exports = router;
