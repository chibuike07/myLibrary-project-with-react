import React, { Component } from "react";
import FaceBookLogo from "./Images/twitter-black-shape.svg";
import LinkedinLogo from "./Images/linked-in-logo-of-two-letters.svg";
import Email from "./Images/envelope.svg";
import UnichrisLogo from "../unichris logo.png";
import "./Footer.css";
const TopArea = () => {
  return (
    <div className="img">
      <div className="case">
        <img src={UnichrisLogo} alt={UnichrisLogo} />
        <div>
          <h4>unichris library</h4>
          <p>my home! our home!!</p>
        </div>
      </div>
      <br />
      <Contacts />
    </div>
  );
};
const Contacts = () => {
  return (
    <div className="f-tex">
      <p>
        want to go on research of all sort,
        <br />
        here is the right we serve you what <br />
        that your questions current journals <br />
        you wish to acces and more
      </p>
      <br />
      <div className="f-phon">
        <h3>phone number</h3>
        <i>090-377-57032</i>
        <i>090-377-57033</i>
        <i>090-377-57036</i>
        <i>090-377-57037</i>
      </div>
      <div className="con-link">
        <br />
        <a href="/">
          <img src={FaceBookLogo} alt={FaceBookLogo} width="10%" />
        </a>
        <a href="/">
          <img src={LinkedinLogo} alt={LinkedinLogo} />
        </a>
        <a href="/">
          <img src={Email} alt={Email} />
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="f-link">
      <h3>services</h3>
      <br />
      <div className="f-a">
        <a href="/">About unchris</a>
        <a href="/">Admmision</a>
        <a href="/">Employment</a>
        <a href="/">Courses</a>
        <a href="/">Jupeb program</a>
        <a href="/">Icbt centre</a>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="f-cat">
      <h3>categories</h3>
      <br />
      <div className="cat-lis">
        <a href="/">fiction books</a>
        <a href="/">non-fiction</a>
        <a href="/">newspaper</a>
        <a href="/">journal</a>
        <a href="/">encyclopedias</a>
        <a href="/">history</a>
      </div>
    </div>
  );
};
const EasyLink = () => {
  return (
    <div className="f-easy">
      <h3>easy links</h3>
      <br />
      <div className="cat-lis">
        <a href="/">books on literature</a>
        <a href="/">books on social sciences</a>
        <a href="/">books on mass communication</a>
      </div>
      <div className="emai">
        <a href="mailto:princewillchime43@gmail.com? subject=subject text">
          email
        </a>
      </div>
    </div>
  );
};
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="ff">
          <TopArea />
          <Services />
          <Categories />
          <EasyLink />
        </div>
        <div className="ryt">
          <h4>copyright 2019 christopher university</h4>
        </div>
      </footer>
    );
  }
}
export default Footer;
