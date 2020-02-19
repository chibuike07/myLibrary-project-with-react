import React, { Component } from "react";
import "../bernadin/Header.css";
// import Logo from "./google.png";
class Header extends Component {
  state = {
    openMenu: true
  };

  handleMenuIcon = () => {
    console.log(this.state.openMenu);
  };

  render() {
    return (
      <>
        <header>
          {/* <!-- ----------DIV 1---------------------------- --> */}
          <div className="imageMain">
            <div className="menu_icon_div">
              <div className="menu_icon"></div>
              <div className="menu_icon"></div>
              <div className="menu_icon"></div>
            </div>
            <div className="imagediv flex">
              <img className="logo" alt="" />
            </div>
          </div>
          {/* <!-- ----------DIV 2--------------------------------- --> */}
          <div className="navBar " ref="navBar" onClick={this.handleMenuIcon}>
            <div className="navBarSub flex">
              <div className="header_ul">
                <ul className="ul">
                  <li className="li">
                    <a className="header_a" href="/">
                      Services
                    </a>
                  </li>
                  <li className="li">
                    <a className="header_a" href="/">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <button className="header_button">Download Now</button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
