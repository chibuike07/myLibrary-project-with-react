import React, { Component } from "react";
import Button from "./Button";
import "./CssFile/RecentActivities.css";
class Recent extends Component {
  render() {
    return (
      <>
        <div className="recent">
          <h3>Our recent activity</h3>
          <br />
          <br />
          <div className="all-act">
            <div className="news">
              <a href="/">
                <p>unichris events and news</p>
              </a>
            </div>
            <div className="bo">
              <a href="/">
                <p>sumarize a book today!!!</p>
              </a>
            </div>
            <div className="quiz">
              <a href="slide-game-refix.html">
                <p>lets test our mind with a quiz game here</p>
              </a>
            </div>
          </div>
        </div>
        <Button />
      </>
    );
  }
}

export default Recent;
