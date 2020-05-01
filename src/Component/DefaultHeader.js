import React, { useState, useEffect } from "react";
import unchrisLogo from "./unichris logo.png";
import DefaultHeaderStyle from "./DefaultHeader.module.css";
import CustomLink from "./Reuseable.component/Link.component/Link";
import CustomImage from "./Reuseable.component/Image.component/Image";
// import { withRouter } from "react-router-dom";
const DefaultHeader = ({ match }) => {
  // console.log(match);
  const {
    header,
    headTop,
    logo,
    displayed_list,
    DefaultHeader_wrapper
  } = DefaultHeaderStyle;
  //declaring states
  const [userName, setUserName] = useState(["chime"]);
  const [weekday, setWeekDay] = useState([]);
  const [time, setTime] = useState("");
  let times;
  //function for days of the week
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
  };
  //getting the fullName of the logged in user
  const userNameData = () => {
    let logger = JSON.parse(sessionStorage.getItem("loggerName"));
    if (logger) {
      setUserName(logger);
    } else return;
  };
  const handleClick = () => {
    times = window.setTimeout(clock, 1000);
    function clock() {
      let date = new Date();
      let timeIn12HrsFormat = date.toLocaleTimeString();
      setTime(timeIn12HrsFormat);
    }
  };
  //function for local time format(24hr)

  //loading some functions on component did mount
  useEffect(() => {
    weekDay();
    userNameData();
    handleClick();
    return () => {
      return clearTimeout(times);
    };
  });

  return (
    <header className={header}>
      <div className={DefaultHeader_wrapper}>
        <div className={headTop}>
          <div className={logo}>
            <CustomImage src={unchrisLogo} alt={unchrisLogo} />
          </div>
          <div>
            <h4 id="day">{weekday}</h4>
            <h5 id="time">{time}</h5>
          </div>
          <div className={displayed_list}>
            <CustomLink url={"/home"} text={"Home"} color={"#493ca2"} />
            <CustomLink url={"/service"} text={"Services"} color={"#493ca2"} />
            <CustomLink url={"/demo"} text={"Demo"} color={"#493ca2"} />
          </div>
          <div className="personDetail">
            {/* <img src="" alt="" /> */}
            <h4>
              <cite id="person-data">{userName}</cite>
            </h4>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;
