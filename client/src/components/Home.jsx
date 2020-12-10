import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import {Container} from './styles/styles';

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get('http://localhost:5000/');
    console.log(responseFromBackend);
  }
  render() {
    return (
      <Container>
        <h1>Cinema Ironhack</h1>
        <Link onClick={this.callMyBackend} to="/movies">Check the movies!</Link>
      </Container>
    );
  }
}
