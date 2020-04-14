import React from "react";
import ReviewsStyles from "./LibraryCss _folder/Review.module.css";
const Text = () => {
  const {
    catalog,
    search_title,
    search_author,
    search_subject,
    review_wrapper
  } = ReviewsStyles;
  return (
    <div className={catalog}>
      <div className={review_wrapper}>
        <div className={search_title}>
          <h2 id="hep">searching the library catalogue</h2>
          <div>
            <h4>title search</h4>
            <p>
              allows you to search for words in the title or series title and
              also allows you to browse throug titles beginning with certain
              words. Enter the words you would like to find. section the type of
              search then click the ok button.
            </p>
          </div>
          <div className={search_author}>
            <h4>Author search</h4>
            <p>
              Allows you to search for words in an author's name. You can select
              to search all authors, only individuals, or only organisations.
              Enter the words you would like to find, select the type of search
              then click the OK button.
            </p>
          </div>
          <div className={search_subject}>
            <h4>Subject search</h4>
            <p>
              Allows you to search for words in a subject heading and also
              allows you to browse through subjects beginning with some text.
              Enter the words you would like to find, select the type of search
              then click the OK button.
            </p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Text;
