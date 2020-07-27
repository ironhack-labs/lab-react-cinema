import React, { Component } from 'react';
import axios from 'axios';
import './home.css';
import { Link } from "react-router-dom";

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get('http://localhost:5000/');
    console.log(responseFromBackend);
  }
  render() {
    return (
      <div className='content'>
        {/* <button onClick={this.callMyBackend}>Test Backend Call</button> */}
        <Link to= '/check-movies' className='btn'>Check the movies!</Link>
        <h1>Welcome to Express Cinema</h1>
      </div>
    );
  }
}
