import React, { Component } from 'react';
import axios from 'axios';

class Newmovie extends Component {
  state ={
    
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    
  }

  handleSubmit = async (event) => {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    console.log(this.state);
    let res = await axios.post('http://localhost:5000/movies/new',this.state)
    console.log(res.data);
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Title:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <br/>
          <label>
          Director:
            <input type="text" name="director" onChange={this.handleChange} />
          </label>
          <br/>
          <label>
          Stars:
            <input type="text" name="stars" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Description:
            <textarea name="description" onChange={this.handleChange}/>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Newmovie;