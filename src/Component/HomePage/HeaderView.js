import React from "react";
import HeaderViewStyles from "./CssFile/HeaderView.module.css";
import CustomLink from "../Reuseable.component/Link.component//Link";
const HeaderView = () => {
  const { header_wrapper, school_nickname } = HeaderViewStyles;
  return (
    <div className={header_wrapper}>
      <h1>
        christopher <br />
        university
      </h1>
      <br />
      <div className={school_nickname}>
        <CustomLink url={"/"} id={"rc"} text={"unichris"} />
      </div>
    </div>
  );
};

export default HeaderView;
