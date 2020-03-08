import React from "react";
import "./LibraryCss _folder/SearchInput.css";
const SearchForm = () => {
  return (
    <div className="form">
      {/* onSubmit="loadClasses(this)" */}
      <form className="search-form">
        <label>
          <span className="screen-reader-text">Search for:</span>
          <input
            type="search"
            id="search"
            className="search-field"
            placeholder="Search"
            value=""
            name="s"
          />
        </label>
        <div className="btn">
          <input type="submit" className="search-submit" />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
