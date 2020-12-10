import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/movies");
        setMovies([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [history]);

  return (
    <>
      <h1>Ironhack Cinema</h1>
      {movies.map((movies, i) => {
        return (
          <div key={i}>
            <img src={movies.image} alt="img" />
            <div>{movies.title}</div>
            <Link to={`/movies/${movies._id}`}>See more</Link>
          </div>
        );
      })}
      <Link to="/movies/new">Insert a new movie</Link>;
    </>
  );
}

export default Movies;
