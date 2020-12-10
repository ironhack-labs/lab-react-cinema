const express = require('express');
const router = express.Router();

const Movies = require('../models/Movie.model')

/* GET home page */
router.get('/movies', async (req, res) => {
  try{
    const movies = await Movies.find();
    return res.status(200).json(movies);
  }catch(err){
    console.error(err);
    return res.status(500).json({msg: err})
  }
  console.log('called');
  res.json({ message: 'index' });
});

router.get('/movies/:id',async (req, res)=>{
  try{
    const { id } = req.params;

    const movies = await Movies.findOne({ _id : id });
    console.log(movies)
    if(movies) {
      return res.status(200).json(movies);
    }
    return res.status(404).json({msg: "Movie not found"});
  }catch(err){
    console.error(err)
    return res.status(500).json({msg: err});
  }
})

router.post('/movies/new',async (req, res)=>{
  try{
    const result = await Movies.create(req.body);
    return res.status(201).json({result});
  }catch(err){
    console.error(err);
    return res.status(500).json({msg: err})
  }
})

module.exports = router;
