import React, { Component } from "react";
import RecentActivitiesStyle from "./CssFile/RecentActivities.module.css";
import CustomLink from "../Reuseable.component/Link.component/Link";
import CustomButton from "../Reuseable.component/Button.component/Button";

class Recent extends Component {
  render() {
    //destructured styles
    const {
      recent,
      all_act,
      sumurizeBook,
      news,
      quiz,
      sum
    } = RecentActivitiesStyle;
    return (
      <>
        <div className={recent}>
          <h3>Our recent activity</h3>
          <br />
          <br />
          <div>
            <div className={all_act}>
              <div className={news}>
                <CustomLink
                  url={"/"}
                  text={<p>unichris events and news</p>}
                  color={"#370594"}
                />
              </div>
              <div className={sumurizeBook}>
                <CustomLink
                  url={"/"}
                  text={<p>sumarize a book today!!!</p>}
                  color={"#370594"}
                />
              </div>
              <div className={quiz}>
                <CustomLink
                  url={"slide-game-refix.html"}
                  text={<p>lets test our mind with a quiz game here</p>}
                  color={"#370594"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={sum}>
          <CustomButton text={"sumarized books"} backgroundColor={"#493ca2"} />
        </div>
      </>
    );
  }
}

export default Recent;
