import React, { Component } from "react";
import QuoteImg from "./Images/quote.png";
import PatronFace from "./Images/replace.svg";
import "./CssFile/Threads.css";
const Testimony = () => {
  return (
    <div className="hap-c">
      <div className="hap">
        <a href="/">TESTIMONIAL</a>
        <h3>Our happy patrons</h3>
        <p>view and join in people testimony</p>
        <p>Let other learn from your testimony</p>
      </div>
    </div>
  );
};

const Image = () => {
  return <img src={PatronFace} id="img-m" alt={PatronFace} />;
};
const PatronsRecentBookSummary = () => {
  return (
    <div className="mom">
      <fieldset className="mom-bord">
        <legend>
          <img src={QuoteImg} alt={QuoteImg} />
        </legend>
        <p>
          you can do it! bit it! change people expression. that your problem is
          never too much. lets go and see the solutions.you also will give your
          own testimony stay toned! stay focus!! access remotely.
        </p>
      </fieldset>
      <Image />
    </div>
  );
};
class Thread extends Component {
  render() {
    return (
      <div className="cust">
        <Testimony />
        <PatronsRecentBookSummary />
      </div>
    );
  }
}

export default Thread;
