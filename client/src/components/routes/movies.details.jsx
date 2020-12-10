import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Details() {
  const history = useHistory();

  const [movies, setMovies] = useState({
    stars: [""],
    showtimes: [""],
  });

  const id = history.location.pathname;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000${id}`);
        setMovies({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [history]);
  const { stars, showtimes } = movies;

  return (
    <>
      <Link to="/movies">Back</Link>
      <img src={movies.image} alt="img" />
      <div>{movies.title}</div>
      <div>Director: {movies.director}</div>
      <ul>
        {stars.map((stars) => {
          return <li>{stars}</li>;
        })}
      </ul>
      <div>{movies.description}</div>
      {showtimes.map((show) => {
        return <div>{show}</div>;
      })}
    </>
  );
}

export default Details;
