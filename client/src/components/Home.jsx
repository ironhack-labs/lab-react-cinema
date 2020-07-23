import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Home extends Component {

  render() {
    return (
      <div >
        <img src={'https://user-images.githubusercontent.com/23629340/36986664-acd6af14-209a-11e8-816d-b62417239c53.png'} style={
          {height: '400px'}
        }/>
        {/* <button onClick={this.callMyBackend}>Test Backend Call</button> */}
        <br />
        <Link to='/movies'>See the movies</Link>
        <br/>
        <Link to='/new'>Add A New Movie</Link>
      </div>
    );
  }
}
