import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class MoviePage extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/get-movies').then((res) => {
      console.log(res)
      this.setState({
        movies: res.data
      })
    })
  }

  displayMovies = () => {
    let movList = [...this.state.movies]
    return movList.map((movie) => {
      return (
        <div>
          <strong>{movie.title} <Link id={movie._id} to={`/movies/${movie._id}`}>See Movie</Link> </strong>
          <br />
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.displayMovies()}
      </div>
    )
  }
}

export default MoviePage