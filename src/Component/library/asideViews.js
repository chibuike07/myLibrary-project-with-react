import React from "react";
import "./LibraryCss _folder/asideView.css";
const InputForBooksTransaction = () => {
  return (
    <div className="gif">
      <form className="resNwRvs">
        <input
          type="text"
          name="auth"
          id="auth"
          placeholder="renew and reserve books..."
          list="books"
          // autocomplete="off"
        />
        <datalist id="books">
          <option value="renew" />
          <option value="reserve" />
        </datalist>
        <input type="submit" id="btns" />
        <p id="colList"></p>
      </form>
      <div className="lin">
        <a href="/">use the library computer</a>
        <a href="/">study and research</a>
        <a href="/">sumarize a book</a>
      </div>
    </div>
  );
};

export default InputForBooksTransaction;
