import React, { Component } from "react";
import InternetImg from "./Images/booksInt.jpeg";
import LibraryServiceStyle from "./CssFile/LibraryService.module.css";
import CustomLink from "../Reuseable.component/Link.component/Link.jsx";
import CustomList from "../Reuseable.component/List.component/List";
import CustomImage from "../Reuseable.component/Image.component/Image";
const Image = ({ image, style }) => {
  return (
    <div className={LibraryServiceStyle.image_wrapper}>
      <CustomImage src={image} alt={image} id={"serv"} className={style} />
    </div>
  );
};
class LibraryServices extends Component {
  state = {
    image: InternetImg
  };
  _NavigationForServices = [
    "internet computers",
    "printing",
    "scanning",
    "research computers",
    "wifi in the library of unichris"
  ];
  render() {
    const { comp, fieldset, list, serv } = LibraryServiceStyle;
    return (
      <div className={comp}>
        <h2>Make use of christopher library services</h2>
        <br />
        <fieldset className={fieldset}>
          <ol id="set">
            {this._NavigationForServices.map((services, i) => (
              <CustomList
                key={i}
                text={
                  <CustomLink
                    text={services}
                    url={"/"}
                    color={"#000"}
                    className={list}
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
