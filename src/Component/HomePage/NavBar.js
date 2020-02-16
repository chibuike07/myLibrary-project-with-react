import React, { Component } from "react";
import NetworkImg from "./Images/network.svg";
import "./CssFile/NavBar.css";
const Image = () => {
  return (
    <div className="nav-img">
      <img src={NetworkImg} alt={NetworkImg} id="img" />
    </div>
  );
};
class NavBar extends Component {
  NavigationArray = [
    "join the library community",
    "renew or reserve book",
    "online catalogue",
    ""
  ];
  render() {
    return (
      <div className="nav">
        <div className="nav-link" id="nav-link">
          <a href="community.html" id="join">
            join the library community
          </a>
          <a href="/" id="ren">
            renew or reserve book
          </a>
          <a href="unichris library.html" id="onl">
            online catalogue
          </a>
        </div>
        <Image />
      </div>
    );
  }
}
export default NavBar;
