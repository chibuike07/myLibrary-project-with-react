import React from "react";
import { Link } from "react-router-dom";
import unchrisLogo from "./unichris logo.png";
import "./Routes.css";
const DefaultHeader = () => {
  return (
    <header>
      <div class="topArea">
        <div class="logo">
          <img src={unchrisLogo} alt={unchrisLogo} />
        </div>
        <div>
          <h4 id="day">weekday</h4>
          <h5 id="time">time</h5>
        </div>
        <div class="displayed-list">
          <Link to="/" target="">
            home
          </Link>
          <Link to="/">services</Link>
          <Link to="/">demo</Link>
        </div>
        <div>
          <img src="" alt="" />
          <h4>
            <cite id="person-data">come</cite>
          </h4>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;
