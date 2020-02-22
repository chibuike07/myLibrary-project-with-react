import React, { Component } from "react";
import InternetImg from "./Images/booksInt.jpeg";
const Image = props => {
  return <img src={props.image} alt={props.image} id="serv" />;
};
class LibraryServices extends Component {
  state = {
    image: InternetImg
  };
  _NavivagionFOrServices = [
    "internet computers",
    "printing",
    "printing",
    "scanning",
    "research computers",
    "wifi in the library of unichris"
  ];

  render() {
    return (
      <div className="comp">
        <h2 href="/">Make use of christopher library services</h2>
        <br />
        <fieldset>
          <ol id="set">
            <li>
              <a href="/" id="int">
                internet computers
              </a>
            </li>
            <li>
              <a href="/" id="pri">
                printing
              </a>
            </li>
            <li>
              <a href="/" id="sca">
                scanning
              </a>
            </li>
            <li>
              <a href="/" id="res">
                research computers
              </a>
            </li>
            <li>
              <a href="/" id="wi-fi">
                wifi in the library of unichris
              </a>
            </li>
          </ol>
          <br />
          <Image image={this.state.image} />
        </fieldset>
      </div>
    );
  }
}
export default LibraryServices;
