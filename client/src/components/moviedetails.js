import React, { useState, useEffect } from "react";
import Axios from "axios";

const moviedetails = async (props) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(
        "http://localhost:5000/movie/${props.match.params.id}"
      );
    }
    fetchData();
  }, [props]);

  return <div>{movie.title}</div>;
};

export default moviedetails;
