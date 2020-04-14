import React from "react";
import HeaderNavBar from "./HeaderNavBar";
import SearchInput from "./SearchInput";
import Content from "./Content";
import AsideViews from "./AsideViews";
import Table from "./TableForBook";
import Text from "./Reviews";
import Display from "./DisplayView";
import Footer from "../Footer/Footer";
import LibraryStyles from "./LibraryCss _folder/Library.module.css";

//functiion for the libray page
const Library = () => {
  // destrctured styles
  const { library_container, nam, components } = LibraryStyles;
  return (
    <div className={library_container}>
      <HeaderNavBar />
      <div id="summary">
        <div className={nam}>
          <h1>christopher university library</h1>
        </div>
        <SearchInput />
        <div className={components}>
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
