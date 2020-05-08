import React, { useState } from "react";
import SearchInputStyles from "./LibraryCss _folder/SearchInput.module.css";
import CustomInput from "../Reuseable.component/Input.component/Input";
import CustomLabel from "../Reuseable.component/Label.component/Label";

//function for collection input search form
const SearchForm = () => {
  //destructured styles
  const {
    form,
    search_form,
    screen_reader_text,
    search_field,
    button,
    search_submit
  } = SearchInputStyles;
  //setting initial input value to empty array
  const [inputValues, setInputValues] = useState([]);

  //function to handle the value of the input
  const handleChange = ({ target }) => {
    setInputValues(prev => ({ ...prev, [target.name]: target.value }));
  };

  //function to handle the form on submit
  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputValues);
  };

  return (
    <div className={form}>
      {/* onSubmit="loadClasses(this)" */}
      <form className={search_form} onSubmit={handleSubmit}>
        <CustomLabel
          text={"search for:"}
          className={screen_reader_text}
          id={"search"}
        />
        <CustomInput
          type={"search"}
          id={"search"}
          className={search_field}
          placeholder={"Search for collections..."}
          name={"search"}
          onChange={handleChange}
          value={inputValues.search}
          isRequired={true}
        />

        <div className={button}>
          <CustomInput
            type="submit"
            className={search_submit}
            value={"search"}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
