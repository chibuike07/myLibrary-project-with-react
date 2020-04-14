import React from "react";
import SectionStyle from "./CssFile/Section.module.css";
import LibraryImage from "./Images/white4.jpg";
import CustomImage from "../Reuseable.component/Image.component/Image";

//function for about us image views
const Image = ({ style }) => {
  return (
    <div className={style}>
      <CustomImage src={LibraryImage} alt={LibraryImage} />
    </div>
  );
};

//function for about us image view
const Text = ({ style }) => {
  return (
    <div className={style}>
      <h1>about us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit
        magnam earum est <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit
        magnam earum est <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit
        magnam earum est
        <br />
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit
        magnam earum est <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit
        magnam earum est <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit
        magnam earum est
        <br />
      </p>
    </div>
  );
};

//parent component for the section view of about us
const Section = () => {
  // destructured styles
  const { about, about_text, about_img } = SectionStyle;
  return (
    <div className={about}>
      <Image style={about_img} />
      <Text style={about_text} />
    </div>
  );
};
export default Section;
