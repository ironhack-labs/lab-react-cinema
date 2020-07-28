import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Movie = (props) => {

  const [movie, setMovie] = useState({})
  
useEffect( () => {
  async function fetchData() {
    const res = await axios.get(`http://localhost:5000/movies/${props.match.params.id}`);

    console.log(res);
    setMovie(res.data)
    
  }
  fetchData();
}, [props] )

  return ( 
  <div>
        <div className="card-front">
              <img
                className="picture"
                src={movie.image}
                alt={movie.title}
              ></img>
            </div>
    <div className="card" key={movie._id}>
              <ul>
                <li>
                  {movie.title}
                </li>
                <li>
                  <strong>Director: </strong>
                  {movie.director}
                </li>
                <li>
                  <strong>stars:</strong>
                  {movie.stars} 
                </li>
                <li>
                  <strong>Description:</strong>
                  <p>{movie.description}</p>
                </li>
                <li>
                  <strong>Showtimes:</strong>
                  {movie.showtimes} 
                </li>
              </ul>
            </div>
  </div> 
    );
}
 
export default Movie;