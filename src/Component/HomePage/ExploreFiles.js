import React from "react";
import ExploreStyles from "./CssFile/Explore.module.css";
import CustomButton from "../Reuseable.component/Button.component/Button";

//function for subscribing of book
const ExploreBooks = () => {
  const { signups, signup } = ExploreStyles;
  return (
    <div className={signups}>
      <div className={signup}>
        <h3>
          <b>ready?</b> to explore in unchris library
        </h3>
        <CustomButton text={"register today"} backgroundColor={"#493ca2"} />
      </div>
    </div>
  );
};

export default ExploreBooks;
//chika grace
