import React, { Component } from "react";
import InternetImg from "./Images/booksInt.jpeg";
import PriterImg from "./Images/printer2.jpeg";
import ScanaImg from "./Images/scana3.jpeg";
import ResearchImg from "./Images/research2.jpeg";
import WifiImg from "./Images/wi-fi.jpeg";
import LibraryServiceStyle from "./CssFile/LibraryService.module.css";
import CustomLink from "../Reuseable.component/Link.component/Link.jsx";
import CustomList from "../Reuseable.component/List.component/List";
import CustomImage from "../Reuseable.component/Image.component/Image";

//function for image display of the moused components
const Image = ({ image, style }) => {
  return (
    <div className={LibraryServiceStyle.image_wrapper}>
      <CustomImage src={image} alt={image} id={"serv"} className={style} />
    </div>
  );
};
class LibraryServices extends Component {
  //set image to the state
  state = {
    image: [InternetImg]
  };
  //array for library services
  _NavigationForServices = [
    {
      text: "internet computers",
      img: InternetImg
    },
    {
      text: "printing",
      img: PriterImg
    },
    {
      text: "scanning",
      img: ScanaImg
    },
    {
      text: "research computers",
      img: ResearchImg
    },
    {
      text: "wifi in the library of unichris",
      img: WifiImg
    }
  ];

  handleMouseOver = ({ target }) => {
    console.log(target.text);
    for (let txt in this._NavigationForServices) {
      if (target.text === this._NavigationForServices[txt].text) {
        this.setState({ image: this._NavigationForServices[txt].img });
      }
    }
  };

  handleMouseLeave = () => {
    this.setState({ image: this._NavigationForServices[0].img });
  };

  render() {
    //destructured style
    const { comp, fieldset, list, serv } = LibraryServiceStyle;
    return (
      <div className={comp}>
        <h2>Make use of christopher library services</h2>
        <br />
        <fieldset className={fieldset}>
          <ol id="set">
            {this._NavigationForServices.map(({ text }, i) => (
              <CustomList
                key={i}
                text={
                  <CustomLink
                    text={text}
                    url={"/"}
                    color={"#000"}
                    className={list}
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseLeave}
                  />
                }
              />
            ))}
          </ol>
          <br />
          <Image image={this.state.image} style={serv} />
        </fieldset>
      </div>
    );
  }
}
export default LibraryServices;
