import React from "react";
import HeaderNavBar from "./HeaderNavBar";
import SearchInput from "./SearchInput";
import Content from "./Content";
import AsideViews from "./asideViews";
import Table from "./TableForBook";
import Text from "./Reviews";
import Display from "./DisplayView";
import Footer from "../Footer/Footer";
import "./LibraryCss _folder/Library.css";

const Library = () => {
  return (
    <div className="allCont">
      <HeaderNavBar />
      <div id="summary">
        <div className="nam">
          <h1>christopher university library</h1>
        </div>
        <SearchInput />
        <div className="cont_c">
          <Content />
          <AsideViews />
          <Table />
        </div>
        <Text />
        <Display />
        <Footer />
      </div>
    </div>
  );
};
export default Library;
