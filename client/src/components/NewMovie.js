import React, { Component } from 'react'
import axios from 'axios'

class NewMovie extends Component {
  state = {
    title: '', 
    director: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post('http://localhost:5000/movie/new', this.state)
    alert(res.data)

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name='title' type='text' placeholder='Movie Title' />
        <br />
        <input onChange={this.handleChange} type='text' name='director' placeholder='Movie Director' />
        <br />
        <input type='submit' />
      </form>
    )
  }
}

export default NewMovie