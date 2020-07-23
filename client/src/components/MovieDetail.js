import React, { useState, useEffect } from 'react'
import axios from 'axios'


const MovieDetail = (props) => {
  console.log(props)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:5000/movie/${props.match.params.id}`)
      setMovie(res.data)
    }
    fetchData();
  }, [props])

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt='Image' />
    </div>
  )
}

export default MovieDetail