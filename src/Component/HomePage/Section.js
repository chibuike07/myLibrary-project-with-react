import React from "react";
import "./CssFile/Section.css";
import LibraryImage from "./Images/white4.jpg";
const Image = () => {
  return (
    <div className="ab-img">
      <img src={LibraryImage} alt={LibraryImage} />
    </div>
  );
};
const Text = () => {
  return (
    <div className="abt-tex">
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

const Section = () => {
  return (
    <div className="about">
      <Image />
      <Text />
    </div>
  );
};
export default Section;
