import React, { Component } from "react";
import NetworkImg from "./Images/network.svg";
import bookImg from "./Images/books.svg";
import cloudImg from "./Images/cloud.svg";
import NavBarStyle from "./CssFile/NavBar.module.css";
import CustomImage from "../Reuseable.component/Image.component/Image";
import CustomLink from "../Reuseable.component/Link.component/Link";
const Image = ({ image, style }) => {
  return (
    <div className={style}>
      <CustomImage src={image} alt={image} id={"img"} />
    </div>
  );
};
class NavBar extends Component {
  state = {
    image: NetworkImg
  };
  NavigationArray = [
    {
      text: "join the library community",
      img: NetworkImg
    },
    {
      text: "renew or reserve book",
      img: bookImg
    },
    {
      text: "online catalogue",
      img: cloudImg
    }
  ];

  handleMouseOver = e => {
    e.preventDefault();
    for (let values in this.NavigationArray) {
      if (e.target.text === this.NavigationArray[values].text) {
        this.setState({ image: this.NavigationArray[values].img });
      }
    }
  };
  handleMouseout = e => {
    e.preventDefault();
    this.setState({ image: NetworkImg });
  };
  render() {
    const { nav, nav_link, nav_img } = NavBarStyle;
    return (
      <div className={nav}>
        <div className={nav_link} id={"nav-link"}>
          {this.NavigationArray.map(({ text }, i) => (
            <CustomLink
              key={i}
              text={text}
              url={"/" + text}
              id={"join"}
              onMouseOver={this.handleMouseOver}
              onMouseLeave={this.handleMouseout}
              click={this.handleClick}
              color={"#000"}
            />
          ))}
        </div>
        <Image image={this.state.image} style={nav_img} />
      </div>
    );
  }
}
export default NavBar;
