import React, { useState } from "react";
import elibraryImg from "./Library_Images/e-lib.jpeg";
import DisplayViewStyles from "./LibraryCss _folder/displayView.module.css";
import secImage from "./Library_Images/e-lib4-reduce.jpg";
import thirdImage from "./Library_Images/e-lib1.jpeg";
import CustomLink from "../Reuseable.component/Link.component/Link";
import CustomButton from "../Reuseable.component/Button.component/Button";
import CustomImage from "../Reuseable.component/Image.component/Image";

//array for display views titles
const displayViewTitleArray = [
  "nelson mandela interactive innovation exhibition",
  "place your book order",
  "unichris library"
];

//array for display view notes
const diaplayViewNotesArray = [
  "visit hour to christopher university library",
  "feel free to place your orders of collection at your comfort",
  "come and embrace the knowledge that is what while"
];
//array for displayviews images
const array = [elibraryImg, secImage, thirdImage];

let length = 0; //assigning length to zero

// function for the libray services
const SerVices = ({
  cover,
  categories_class,
  categories_class_btn,
  join,
  ren,
  cat
}) => {
  return (
    <div className={cover}>
      <div className={categories_class}>
        <CustomLink
          url="/"
          text={"library services"}
          className={`${categories_class_btn} ${join}`}
          color={"#493ca2"}
        />
        <CustomLink
          url={"lending.html"}
          className={`${categories_class_btn} ${ren}`}
          text={"record collections"}
        />
        <CustomLink
          url={"/"}
          className={`${categories_class_btn} ${cat}`}
          text={"online catalog"}
          color={"#493ca2"}
        />
      </div>
    </div>
  );
};

//function for displayview component
const DisplayView = () => {
  //setting image to the state for watch out
  const [image, setImage] = useState(elibraryImg);
  //setting the initial value for display views title
  const [headings, setHeadings] = useState(
    "nelson mandela interactive innovation exhibition"
  );

  //setting the initial value for display views notes
  const [params, setParams] = useState(
    "visit hour to christopher university library"
  );

  //function to display the next slide
  const handleNext = () => {
    length = length + 1;
    length = length % array.length;
    if (array[length]) {
      setHeadings(displayViewTitleArray[length]);
      setParams(diaplayViewNotesArray[length]);
    }
    setImage(array[length]);
  };

  //function to display the previous slide
  const handlePrevious = () => {
    if (length === 0) {
      length = array.length;
    } else {
      length = length - 1;
      setImage(array[length]);
      if (array[length]) {
        setHeadings(displayViewTitleArray[length]);
        setParams(diaplayViewNotesArray[length]);
      }
    }
  };

  //destructuring styles
  const {
    library_views,
    button_click,
    high_light,
    cover,
    categories_class,
    categories_class_btn,
    join,
    ren,
    cat
  } = DisplayViewStyles;
  return (
    <>
      <div className={library_views}>
        <div className={button_click}>
          <CustomButton
            click={handleNext}
            text={<b>prev</b>}
            backgroundColor={"#494ca2"}
          />
          <CustomButton
            click={handlePrevious}
            text={<b>next</b>}
            backgroundColor={"#494ca2"}
          />
        </div>
        <div style={{ height: "35%" }}>
          <CustomImage src={image} alt={image} id={"library-views"} />
        </div>
        <div className={high_light}>
          <div className="text">
            <h4 id="h4">{headings}</h4>
            <i id="p">{params}</i>
          </div>
        </div>
      </div>
      <SerVices
        cover={cover}
        categories_class={categories_class}
        categories_class_btn={categories_class_btn}
        join={join}
        ren={ren}
        cat={cat}
      />
    </>
  );
};

export default DisplayView;
