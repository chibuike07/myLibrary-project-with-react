import React, { Component } from "react";
import { Link } from "react-router-dom";
import NetworkImg from "./Images/network.svg";
import bookImg from "./Images/books.svg";
import cloudImg from "./Images/cloud.svg";
import "./CssFile/NavBar.css";
const Image = props => {
  return (
    <div className="nav-img">
      <img src={props.image} alt={props.image} id="img" />
    </div>
  );
};
class NavBar extends Component {
  state = {
    image: NetworkImg
  };
  NavigationArray = [
    {
      text: "join the library community",
      img: NetworkImg
    },
    {
      text: "renew or reserve book",
      img: bookImg
    },
    {
      text: "online catalogue",
      img: cloudImg
    }
  ];
  handleMouseOver = e => {
    e.preventDefault();
    for (let values in this.NavigationArray) {
      if (e.target.innerText === this.NavigationArray[values].text) {
        this.setState({ image: this.NavigationArray[values].img });
      }
    }
  };
  handleMouseout = e => {
    e.preventDefault();
    this.setState({ image: NetworkImg });
  };
  render() {
    return (
      <div className="nav">
        <div className="nav-link" id="nav-link">
          <Link
            to="/"
            id="join"
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseout}
          >
            join the library community
          </Link>
          <Link
            to="/"
            id="ren"
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseout}
          >
            renew or reserve book
          </Link>
          {/* href to unichris library */}
          <Link
            to="/"
            id="onl"
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseout}
          >
            online catalogue
          </Link>
        </div>
        <Image image={this.state.image} />
      </div>
    );
  }
}
export default NavBar;
