import React, { useState, useEffect } from "react";
import Axios from "axios";

const Moviedetails = (props) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await Axios.get(
        `http://localhost:5000/movie/${props.match.params.id}`
      );

      console.log(res);
      setMovie(res.data);
    }
    fetchData();
  }, [props]); // Or [] if effect doesn't need props or state

  return (
    <div>
      <img src={movie.image} alt={movie.title} />
      <br />
      {movie.title}
    </div>
  );
};

export default Moviedetails;
