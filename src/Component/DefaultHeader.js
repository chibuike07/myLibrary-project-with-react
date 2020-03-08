import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import unchrisLogo from "./unichris logo.png";
import "./DefaultHeader.css";
const DefaultHeader = () => {
  const [userName, setUserName] = useState("chime");
  const [weekday, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const weekDay = () => {
    let date = new Date();
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    // assigning value to date and weekday
    setWeekDay(`Today is ${day[date.getDay()]}`);
    // setTimeout(weekDay, 500);
  };
  const userNameData = () => {
    let logger = JSON.parse(localStorage.getItem("loggerName"));
    if (logger) {
      setUserName(logger);
    } else return;
  };
  const times = () => {
    let date = new Date();
    let timeIn12HrsFormat = date.toLocaleTimeString();
    setTime(timeIn12HrsFormat);
    window.setTimeout(times, 500);
  };
  useEffect(() => {
    weekDay();
    userNameData();
  });
  useEffect(() => {
    times();
  });
  return (
    <header>
      <div className="headTop">
        <div className="logo">
          <img src={unchrisLogo} alt={unchrisLogo} />
        </div>
        <div>
          <h4 id="day">{weekday}</h4>
          <h5 id="time">{time}</h5>
        </div>
        <div className="displayed-list">
          <Link to="/" target="">
            home
          </Link>
          <Link to="/">services</Link>
          <Link to="/">demo</Link>
        </div>
        <div className="personDetail">
          {/* <img src="" alt="" /> */}
          <h4>
            <cite id="person-data">{userName}</cite>
          </h4>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;
