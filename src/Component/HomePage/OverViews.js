import React, { Component } from "react";
import manager from "./Images/manager.svg";
import chart from "./Images/chart (1).svg";
import HelpImg from "./Images/help (1).svg";
import logoutImg from "./Images/logout.svg";
import "./CssFile/OverView.css";
const Member = () => {
  return (
    <div className="mem">
      <a href="/">
        <img src={manager} alt={manager} />
      </a>
      <br />
      <a href="/" id="memb">
        <h4>member</h4>``
        <p>
          Lets know and take in account <br />
          our numbers
        </p>
      </a>
    </div>
  );
};

const Statistic = () => {
  return (
    <div className="sta">
      <a href="/">
        <img src={chart} alt={chart} />
      </a>
      <br />
      <h4>statistics</h4>
      <p>Unichris daily analysis. let know how we are growing!!!</p>
    </div>
  );
};
const Help = () => {
  return (
    <div className="hel">
      <a href="/" target="/">
        <img src={HelpImg} alt={HelpImg} />
      </a>
      <br />
      <h4>help</h4>
      <p id="help">Get assisted on unichris library services</p>
    </div>
  );
};

const Log = () => {
  return (
    <div className="log">
      <a href="/">
        <img src={logoutImg} alt={logoutImg} />
      </a>
      <br />
      <h4>log out</h4>
      <p>You can always sign out here! we hope you enjoy our services</p>
    </div>
  );
};
class OverViews extends Component {
  render() {
    return (
      <div className="clue">
        <div className="top-List">
          <Member />
          <Statistic />
          <Help />
          <Log />
        </div>
      </div>
    );
  }
}
export default OverViews;
