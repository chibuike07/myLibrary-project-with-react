import React, { Component } from "react";
import QuoteImg from "./Images/quote.png";
import PatronFace from "./Images/replace.svg";
import ThreadStyles from "./CssFile/Threads.module.css";
import CustomLink from "../Reuseable.component/Link.component/Link";
import CustomImage from "../Reuseable.component/Image.component/Image";
const Testimony = ({ style, childStyle }) => {
  return (
    <div className={style}>
      <div className={childStyle}>
        <CustomLink url={"/"} text={"TESTIMONIAL"} color={"#493ca2"} />
        <h3>Our happy patrons</h3>
        <p>view and join in people testimony</p>
        <p>Let other learn from your testimony</p>
      </div>
    </div>
  );
};

const PatronsRecentBookSummary = ({ style, childStyle }) => {
  return (
    <div className={style}>
      <fieldset className={childStyle}>
        <legend>
          <CustomImage
            src={QuoteImg}
            alt={QuoteImg}
            position={"relative"}
            left={"80%"}
            top={"1%"}
          />
        </legend>
        <p>
          you can do it! bit it! change people expression. that your problem is
          never too much. lets go and see the solutions.you also will give your
          own testimony stay toned! stay focus!! access remotely.
        </p>
      </fieldset>
      <CustomImage
        src={PatronFace}
        id={"img-m"}
        alt={PatronFace}
        position={"relative"}
        left={"50%"}
        top={"8px"}
        type={"button"}
      />
    </div>
  );
};
class Thread extends Component {
  render() {
    const {
      thread_wrapper,
      testimony_wrapper,
      testimony_hint_container,
      patrons_view_wrapper,
      patrons_field_set
    } = ThreadStyles;
    return (
      <div className={thread_wrapper}>
        <Testimony
          style={testimony_wrapper}
          childStyle={testimony_hint_container}
        />
        <PatronsRecentBookSummary
          style={patrons_view_wrapper}
          childStyle={patrons_field_set}
        />
      </div>
    );
  }
}

export default Thread;
