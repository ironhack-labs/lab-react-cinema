const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  // The schema
  title: {
    type:String,
    required:true
  },
  director: String,

  stars:[ String ],

  image:{
    type:String,
    default:"https://images.media-allrecipes.com/images/75131.jpg"
  },
  showtimes:[ String ],
});

const Movie = mongoose.model('Movie', moviesSchema);

module.exports = Movie;