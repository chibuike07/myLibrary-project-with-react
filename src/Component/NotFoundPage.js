import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "80vh",
        lineHeight: 2,
        background: "#434ca2",
        color: "#fff"
        //   'repeating-linear-gradient("to left,rgba(255, 255, 255, 0.938), rgba(255, 255, 255, 0)")'
      }}
    >
      <h1>this page does not exist</h1>
      <p>
        you can get to the registration page to sign up or sign in with the link
        below
      </p>
      <Link to="/" style={{ fontWeight: "bolder", color: "#fff" }}>
        sign up
      </Link>
    </div>
  );
};

export default PageNotFound;
