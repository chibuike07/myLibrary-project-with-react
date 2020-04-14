import React, { useState } from "react";
import SearchInputStyles from "./LibraryCss _folder/SearchInput.module.css";
import CustomInput from "../Reuseable.component/Input.component/Input";
import CustomLabel from "../Reuseable.component/Label.component/Label";
const SearchForm = () => {
  const {
    form,
    search_form,
    screen_reader_text,
    search_field,
    button,
    search_submit
  } = SearchInputStyles;

  const [states, setstate] = useState("");

  const handleChange = ({ target }) => {
    setstate(prev => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(states);
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
          value={states.search}
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
