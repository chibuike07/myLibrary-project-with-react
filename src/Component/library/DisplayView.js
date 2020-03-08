import React, { useState } from "react";
import elibraryImg from "./Library_Images/e-lib.jpeg";
import "./LibraryCss _folder/displayView.css";
import secImage from "./Library_Images/e-lib4-reduce.jpg";
import thirdImage from "./Library_Images/e-lib1.jpeg";
const SerVices = () => {
  return (
    <div className="cover">
      <div className="cat-class">
        <a href="/" className="cat-class-btn join">
          library services
        </a>
        <a href="lending.html" className="cat-class-btn ren">
          record collections
        </a>
        <a href="/" className="cat-class-btn cat">
          online catalog
        </a>
      </div>
    </div>
  );
};
const h4Arr = [
  "nelson mandela interactive innovation exhibition",
  "place your book order",
  "unichris library"
];
const pArr = [
  "visit hour to christopher university library",
  "feel free to place your orders of collection at your comfort",
  "come and embrace the knowledge that is what while"
];
let len = 0;
const array = [elibraryImg, secImage, thirdImage];
const DisplayView = () => {
  const [image, setImage] = useState(elibraryImg);
  const [headings, setHeadings] = useState(
    "nelson mandela interactive innovation exhibition"
  );
  const [params, setParams] = useState(
    "visit hour to christopher university library"
  );

  const handleNext = () => {
    len = len + 1;
    len = len % array.length;
    if (array[len]) {
      setHeadings(h4Arr[len]);
      setParams(pArr[len]);
    }
    setImage(array[len]);
  };

  const handlePrevious = () => {
    if (len === 0) {
      len = array.length;
    } else {
      len = len - 1;
      setImage(array[len]);
      if (array[len]) {
        setHeadings(h4Arr[len]);
        setParams(pArr[len]);
      }
    }
  };
  return (
    <>
      <div className="library-views">
        <div className="nav-click">
          <button onClick={handleNext}>
            <b>prev</b>
          </button>
          <button onClick={handlePrevious}>
            <b>next</b>
          </button>
        </div>
        <div style={{ height: "35%" }}>
          <img src={image} alt={image} id="library-views" />
        </div>
        <div className="nav-btn">
          <div className="text">
            <h4 id="h4">{headings}</h4>
            <i id="p">{params}</i>
          </div>
        </div>
      </div>
      <SerVices />
    </>
  );
};

export default DisplayView;
