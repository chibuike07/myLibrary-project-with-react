import React, { Component, useState, useEffect } from "react";
import manager from "./Images/manager.svg";
import chart from "./Images/chart (1).svg";
import HelpImg from "./Images/help (1).svg";
import logoutImg from "./Images/logout.svg";
import CustomLink from "../Reuseable.component/Link.component/Link";
import CustomImage from "../Reuseable.component/Image.component/Image";
import OverViewStyles from "./CssFile/OverView.module.css";

//function for members display
const Member = ({ member, style }) => {
  // setting fullname for the state
  const [fullName, setFullName] = useState(null);

  //fucntion that returns the names
  const ReturnNames = () => {
    let [...names] = member;
    for (let name of names) {
      let nameData = `${name.fname} ${name.lname}`;
      setFullName(nameData);
    }
  };
  useEffect(() => {
    ReturnNames();
  });

  return (
    <div className={style}>
      <CustomLink
        url={"/home/" + fullName}
        text={<CustomImage src={manager} alt={manager} height={"30px"} />}
      />
      <br />
      <CustomLink
        url={"/home/" + fullName}
        id={"memb"}
        text={
          <div
            style={{
              color: "#fff",
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column"
            }}
          >
            <h4 style={{ color: "#fff", textAlign: "left" }}>member</h4>
            <p>
              Lets know and take in account <br />
              our numbers
            </p>
          </div>
        }
      />
    </div>
  );
};

const Statistic = ({ style }) => {
  return (
    <div className={style}>
      <CustomLink
        url={"/home/statistics"}
        text={<CustomImage src={chart} alt={chart} height={"30px"} />}
      />
      <br />
      <CustomLink
        text={
          <div
            style={{
              color: "#494ca2",
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column"
            }}
          >
            <h4 style={{ textAlign: "left" }}>statistics</h4>
            <p>Unichris daily analysis. let know how we are growing!!!</p>
          </div>
        }
        url={"/home/statistics"}
      />
    </div>
  );
};
const Help = ({ style }) => {
  return (
    <div className={style}>
      <CustomLink
        url="/"
        text={<CustomImage src={HelpImg} alt={HelpImg} height={"30px"} />}
        height={"30px"}
      />
      <br />
      <CustomLink
        url={"/"}
        text={
          <div
            style={{
              color: "#494ca2",
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column"
            }}
          >
            <h4 style={{ textAlign: "left" }}>help</h4>
            <p id="help">Get assisted on unichris library services</p>
          </div>
        }
      />
    </div>
  );
};

const Log = ({ style }) => {
  return (
    <div className={style}>
      <CustomLink
        url="/"
        text={<CustomImage src={logoutImg} alt={logoutImg} height={"30px"} />}
      />
      <br />
      <CustomLink
        url={"/"}
        text={
          <div
            style={{
              color: "#494ca2",
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column"
            }}
          >
            <h4 style={{ textAlign: "left" }}>log out</h4>
            <p>You can always sign out here! we hope you enjoy our services</p>
          </div>
        }
      />
    </div>
  );
};
class OverViews extends Component {
  render() {
    //destructured styles
    const { clue, member, statistics, help, log, top_List } = OverViewStyles;

    return (
      <div className={clue}>
        <div className={top_List}>
          <Member member={this.props.members} style={member} />
          <Statistic style={statistics} />
          <Help style={help} />
          <Log style={log} />
        </div>
      </div>
    );
  }
}
export default OverViews;
