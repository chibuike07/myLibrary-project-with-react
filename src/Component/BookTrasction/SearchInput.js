import React, { useState } from "react";
import CustomInput from "../Reuseable.component/Input.component/Input";
const SearchInput = () => {
  const [filterValue, setFilterValue] = useState("");
  const handleChange = ({ target }) => {
    setFilterValue(prev => ({ ...prev, [target.name]: target.value }));
    console.log(target.value);
  };
  // console.log(filterValue);
  return (
    <div className="dom-holders">
      {/* <p id="number of books">hello</p>
      <p id="result">result</p>
      <p id="dem">it me</p> */}

      <CustomInput
        type={"text"}
        placeholder={"user-information"}
        id={"userFil"}
        onkeyup={"filter()"}
        name={"search"}
        // value={filterValue.search}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchInput;
