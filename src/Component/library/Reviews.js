import React from "react";

const Text = () => {
  return (
    <div className="catalo">
      <div className="tex-tex">
        <h2 id="hep">searching the library catalogue</h2>
        <div>
          <h4>title search</h4>
          <p>
            allows you to search for words in the title or series title and also
            allows you to browse throug titles beginning with certain words.
            Enter the words you would like to find. section the type of search
            then click the ok button.
          </p>
        </div>
        <div>
          <h4>Author search</h4>
          <p>
            Allows you to search for words in an author's name. You can select
            to search all authors, only individuals, or only organisations.
            Enter the words you would like to find, select the type of search
            then click the OK button.
          </p>
        </div>
        <div>
          <h4>Subject search</h4>
          <p>
            Allows you to search for words in a subject heading and also allows
            you to browse through subjects beginning with some text. Enter the
            words you would like to find, select the type of search then click
            the OK button.
          </p>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Text;
