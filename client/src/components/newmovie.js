import React, { Component } from 'react';
import Axios from 'axios'


class newMovie extends Component {

    // state = {

    // }

    handleChange = (e) => {
    
        this.setState({ [e.target.name]:e.target.value })
    
      }
    
      handleSubmit = async (e) => {
        e.preventDefault()
        console.log(this.state)
        let res = await Axios.post(`http://localhost:5000/movies/new`, this.state)
        alert(res.data)
      }

    render() {
        return (
        <div>
         <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="title" type="text" placeholder='Movie Title'/>
          <input onChange={this.handleChange} name="director" type="text" placeholder='Movie Director' />
          <button>Add movie</button>
        </form> 
            </div>
        );
    }
}

export default newMovie;