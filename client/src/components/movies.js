import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class movies extends Component {
    state ={
        movies:[]
    }

    async componentDidMount() {
        let res = await axios.get('http://localhost:5000/get-movies')
        // console.log(res)
        this.setState({
            movies:res.data
        })
        console.log(this.state.movies)
    }

    displayMovies = () =>{
        return this.state.movies.map((eachMovie) => {
            return <div>
                <li>
                    <img src ={eachMovie.image} alt={eachMovie.title}/>
                    <br/>
                    {eachMovie.title}
                    <Link to={`/movie/${eachMovie._id}`}>See More</Link>
                </li>
            </div>
        })
    }
    

    render() {
        return (
            <div>
                {this.displayMovies()}
            </div>
        );
    }
}

export default movies;