import React, { Component } from "react";
import manager from "./Images/manager.svg";
import chart from "./Images/chart (1).svg";
import HelpImg from "./Images/help (1).svg";
import logoutImg from "./Images/logout.svg";
import { Link } from "react-router-dom";
import "./CssFile/OverView.css";
const Member = () => {
  return (
    <div className="mem">
      <Link to="/home/member">
        <img src={manager} alt={manager} />
      </Link>
      <br />
      <Link to="/home/member" id="memb">
        <h4>member</h4>
        <p>
          Lets know and take in account <br />
          our numbers
        </p>
      </Link>
    </div>
  );
};

const Statistic = () => {
  return (
    <div className="sta">
      <Link to="/home/statistics">
        <img src={chart} alt={chart} />
      </Link>
      <br />
      <h4>statistics</h4>
      <p>Unichris daily analysis. let know how we are growing!!!</p>
    </div>
  );
};
const Help = () => {
  return (
    <div className="hel">
      <Link to="/" target="/">
        <img src={HelpImg} alt={HelpImg} />
      </Link>
      <br />
      <h4>help</h4>
      <p id="help">Get assisted on unichris library services</p>
    </div>
  );
};

const Log = () => {
  return (
    <div className="log">
      <Link to="/">
        <img src={logoutImg} alt={logoutImg} />
      </Link>
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
