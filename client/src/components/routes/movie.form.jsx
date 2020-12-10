import React, { useState } from "react";
import axios from "axios";

function New() {
  let [movie, setMovie] = useState({
    title: "",
    director: "",
    stars: "",
    image: "",
    description: "",
  });

  function handleChange(event) {
    setMovie({...movie, [event.currentTarget.name]: event.currentTarget.value})
    console.log(movie)
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try{
      const response = await axios.post("/movies/new", movie);

      console.log(response);
    }catch(err){
      console.error(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="movieTitle"
          label="Movie Title"
          onChange={handleChange}
          value={movie.title}
          placeholder="title"
        />
        <input
          type="text"
          name="director"
          id="movieDirector"
          onChange={handleChange}
          label="Movie Director"
          value={movie.director}
          placeholder="director"
        />
        <input
          type="text"
          name="stars"
          id="movieStars"
          onChange={handleChange}
          label="Movie Stars"
          value={movie.stars}
          placeholder="stars"
        />
        <input
          type="text"
          name="image"
          id="movieImage"
          onChange={handleChange}
          label="Movie Image"
          value={movie.image}
          placeholder="image"
        />
        <input
          type="text"
          name="description"
          id="movieDescription"
          onChange={handleChange}
          label="Movie Description"
          value={movie.description}
          placeholder="description"
        />

        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default New;
