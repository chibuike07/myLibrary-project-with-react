import React, { useState, useEffect } from "react";
import AsideViewStyles from "./LibraryCss _folder/AsideView.module.css";
import CustomInput from "../Reuseable.component/Input.component/Input";
import CustomLink from "../Reuseable.component/Link.component/Link";
import { withRouter } from "react-router-dom";
const InputForBooksTransaction = ({ location }) => {
  //destructured styles from asideview styles
  const { input_wrapper, form, library_services } = AsideViewStyles;
  //set the inputvalue initial value to an empty string
  const [inputValue, setInputValues] = useState("");

  //funtion to input values on change
  const handleChange = ({ target }) => {
    setInputValues(prev => ({ ...prev, [target.name]: target.value }));
  };

  //function for form submit
  const handleSubmit = e => {
    e.preventDefault();
    // let bookTransaction = inputValue.auth;
    renewBook();
  };
  const renewBook = () => {
    //get the search value
    let bookTransaction = inputValue.auth;
    //renew collections
    if (bookTransaction === "renew") {
      //add title of the book
      let promptForRenewBook = window.prompt("please write down the title", "");
      if (promptForRenewBook) {
        //check for clarity
        let confirmNeed = window.confirm("Are you ok with the spellings");
        if (confirmNeed === true) {
          console.log(promptForRenewBook);
        }
      }
    }
  };

  useEffect(() => {
    if (location.hash === "#auth") {
      window.scrollTo(0, 1000);
      let res = document.getElementById("auth");
      res.focus();
      return;
    } else {
      console.log("location hash not defined");
      return;
    }
  }, [location]);
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

export default withRouter(InputForBooksTransaction);
