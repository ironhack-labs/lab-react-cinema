const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieShema = new Schema({
  title: { type: String },
  director: { type: String },
  stars: [String],
  image: { type: String },
  description: { type: String },
  showtimes: [String],
});

const Movie = mongoose.model('Movie', movieShema);

module.exports = Movie;
