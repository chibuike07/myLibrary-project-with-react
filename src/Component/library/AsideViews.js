import React, { useState } from "react";
import AsideViewStyles from "./LibraryCss _folder/AsideView.module.css";
import CustomInput from "../Reuseable.component/Input.component/Input";
import CustomLink from "../Reuseable.component/Link.component/Link";
const InputForBooksTransaction = () => {
  const { input_wrapper, form, library_services } = AsideViewStyles;
  const [inputValue, setInputValues] = useState("");

  const handleChange = ({ target }) => {
    setInputValues(prev => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    // <div>
    <div className={input_wrapper}>
      <form className={form} onSubmit={handleSubmit} autoComplete={"off"}>
        <CustomInput
          type={"text"}
          name={"auth"}
          id={"auth"}
          value={inputValue.auth}
          onChange={handleChange}
          placeholder={"renew and reserve books..."}
          list={"books"}
        />
        <datalist id="books">
          <option value="renew" />
          <option value="reserve" />
        </datalist>
        <CustomInput type={"submit"} id={"btns"} value={"submit"} />
        <p id="colList"></p>
      </form>
      <div className={library_services}>
        <CustomLink url="/" text={"use the library computer"} color={"#fff"} />
        <CustomLink url="/" text={"study and research"} color={"#fff"} />
        <CustomLink url="/" text={"sumarize a book"} color={"#fff"} />
      </div>
    </div>
    // </div>
  );
};

export default InputForBooksTransaction;
