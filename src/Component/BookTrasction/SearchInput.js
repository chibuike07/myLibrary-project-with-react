import React, { useState } from "react";
import CustomInput from "../Reuseable.component/Input.component/Input";
import SearchInputStyles from "./booktransaction_styles/SearchInput.module.css";
const SearchInput = () => {
  const [filterValue, setFilterValue] = useState({
    search: ""
  });
  const handleChange = ({ target }) => {
    setFilterValue(prev => ({ ...prev, [target.name]: target.value }));
    console.log(target.value);
  };
  const { searchBox } = SearchInputStyles;
  return (
    <div className="dom-holders">
      <CustomInput
        type={"text"}
        placeholder={"search by name"}
        id={"userFil"}
        name={"search"}
        value={filterValue.search}
        onChange={handleChange}
        className={searchBox}
        autoComplete={"off"}
        autoCorrect={"on"}
        spellCheck={"on"}
      />
    </div>
  );
};
export default SearchInput;
