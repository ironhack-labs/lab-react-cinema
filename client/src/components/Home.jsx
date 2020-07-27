import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get("http://localhost:5000/");
    // console.log(responseFromBackend);
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="relative">
          <img
            src="https://user-images.githubusercontent.com/23629340/36986664-acd6af14-209a-11e8-816d-b62417239c53.png"
            alt="cinema-bg"
          ></img>
          <Link to="./movies">
            <button className="home-btn">Check the movies!</button>
          </Link>
        </div>
      </div>
    );
  }
}
