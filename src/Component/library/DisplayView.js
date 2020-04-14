import React, { useState } from "react";
import elibraryImg from "./Library_Images/e-lib.jpeg";
import DisplayViewStyles from "./LibraryCss _folder/displayView.module.css";
import secImage from "./Library_Images/e-lib4-reduce.jpg";
import thirdImage from "./Library_Images/e-lib1.jpeg";
import CustomLink from "../Reuseable.component/Link.component/Link";
import CustomButton from "../Reuseable.component/Button.component/Button";
import CustomImage from "../Reuseable.component/Image.component/Image";
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
