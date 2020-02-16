import React from "react";

const SearchInput = () => {
  return (
    <div class="dom-holders">
      {/* <p id="number of books">hello</p>
      <p id="result">result</p>
      <p id="dem">it me</p> */}

      <input
        type="text"
        placeholder="user-information"
        id="userFil"
        onkeyup="filter()"
      />
    </div>
  );
};
export default SearchInput;
