const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res) => {
  console.log('called');
  res.json({ message: 'index' });
});

router.get('/get-movies',(req, res) => {
  Movies.find().then(movies =>{
    res.json(movies)
  })
});

router.get('/movie/:id',(req, res) => {
  Movies.findById(req.params.id).then(movie =>{
    res.json(movie)
  })
});

router.post('/movies/new',(req, res) => {
  Movies.create(req.body).then(()=>{
    res.json("added movies")
  })
  });




module.exports = router;
