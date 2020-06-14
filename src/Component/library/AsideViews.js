import React, { useState, useEffect } from "react";
import AsideViewStyles from "./LibraryCss _folder/AsideView.module.css";
import CustomInput from "../Reuseable.component/Input.component/Input";
import CustomLink from "../Reuseable.component/Link.component/Link";
import axios from "axios";
import { withRouter } from "react-router-dom";
const InputForBooksTransaction = ({ location }) => {
  //destructured styles from asideview styles
  const { input_wrapper, form, library_services } = AsideViewStyles;
  //set the inputvalue initial value to an empty string
  const [inputValue, setInputValues] = useState("");
  //set state for the books transactions collection
  const [bookTransactionData, setBookTransactionData] = useState([]);

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
  const handleCollection = async () => {
    await axios.get("http://localhost:4000/books_transaction").then(res => {
      console.log(res.data);
      setBookTransactionData(res.data);
      // return res.data
    });
  };
  const renewBook = async () => {
    //get the search value
    let bookTransaction = inputValue.auth;
    //renew collections
    if (bookTransaction === "renew") {
      let signInUser = await JSON.parse(sessionStorage.getItem("loggerName")); //getting the signed in  member fullName
      let memberHadBorrowABook = bookTransactionData.filter(
        //check if member already have some books with him
        bookDatas => bookDatas.name === signInUser
      );
      if (memberHadBorrowABook.length < 1) {
        //check if the member is owing the library
        alert(
          ` please ${signInUser} is found that you are not owing the library, please you may held to reserve a new book`
        );
        return false;
      } else {
        // console.log(memberHadBorrowABook);
        let res = memberHadBorrowABook.map(
          (
            {
              name,
              user_number,
              user_department,
              author,
              fine,
              date,
              isbn,
              issue_date,
              return_day,
              title,
              total_days,
              weekday,
              accession_number,
              added_days,
              _id
            },
            i
          ) => {
            //check the date different of the book the user want to renew
            let dateDifferent =
              new Date(return_day).getDate() - new Date(issue_date).getDate();
            let currentDate = new Date().toLocaleDateString();
            if (Math.abs(dateDifferent) <= 7) {
              let renewBookObject = {
                name,
                user_number,
                user_department,
                author,
                fine,
                date: currentDate,
                isbn,
                issue_date: currentDate,
                return_day: currentDate,
                title,
                total_days,
                weekday,
                accession_number,
                added_days
              };
              memberHadBorrowABook.splice(i, 1, renewBookObject);
              return memberHadBorrowABook;

              //checking if the total day is less than or equal to 7days
              // let promptForRenewBook = window.prompt(
              //   "please write down the title",
              //   ""
              // );
              // if (promptForRenewBook) {
              //   //check for clarity
              //   let confirmNeed = window.confirm("Are you ok with the spellings");
              //   if (confirmNeed === true) {
              //     console.log(promptForRenewBook);
              //     if (promptForRenewBook) {
              //       let specifiedBookByTitle = bookTransactionData.filter(
              //         //getting the book that match the titled book specified
              //         bookData => bookData.title === promptForRenewBook
              //       );
              //       console.log(specifiedBookByTitle);
              //     }
              //   }
              // }
            } else {
              //things to do if the total day is above 7days
              let domorageFee = Math.abs(dateDifferent) - 7;
              return alert(
                //sending an alert to the user to notify the user on the amounted fee and to return the book to the library
                `sorry ${signInUser} you are not eligible to renew this book again please kindly return. you amounted fee currectly is ${domorageFee *
                  100}. Thank you`
              );
              //console.log(domorageFee * 100);
            }
          }
        );
        let { _id } = res[0];
        axios.put(`http://localhost:4000/books_collection/${_id}`, res[0]);
      }
    }
  };

  useEffect(() => {
    handleCollection();
    if (location.hash === "#auth") {
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
