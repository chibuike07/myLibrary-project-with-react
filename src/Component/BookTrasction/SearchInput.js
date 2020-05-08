import React from "react";
import CustomInput from "../Reuseable.component/Input.component/Input";
import SearchInputStyles from "./booktransaction_styles/SearchInput.module.css";
const SearchInput = ({ handleChange, state }) => {
  const { searchBox } = SearchInputStyles;
  let { search } = state;
  return (
    <div className="dom-holders">
      <CustomInput
        type={"text"}
        placeholder={"search by name"}
        id={"userFil"}
        name={"search"}
        value={search}
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
