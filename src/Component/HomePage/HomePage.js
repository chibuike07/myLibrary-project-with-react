import React, { Component } from "react";
import DefaultHeader from "../DefaultHeader";
import HeaderView from "./HeaderView";
import OverViews from "./OverViews";
import Section from "./Section";
import Navbar from "./NavBar";
import HighLights from "./HighLight";
import RecentActivity from "./RecentActivity";
import Threads from "./Threads";
import ExploreBooks from "./ExploreFiles";
import Footer from "../Footer/Footer";
import HomePageStyles from "./CssFile/Homepage.module.css";

//component for home page
class Hompage extends Component {
  //setting member to the state
  state = {
    member: []
  };

  handleVisitedCount = () => {
    let count = 0;
    this.timeout = setTimeout(() => {
      try {
        if (localStorage.getItem("visitedCount") === null)
          localStorage.setItem("visitedCount", JSON.stringify(count));
        else {
          let storage = JSON.parse(localStorage.getItem("visitedCount"));
          storage = storage + 1;
          localStorage.setItem("visitedCount", JSON.stringify(storage));
        }
      } catch (err) {
        console.error(err);
      }
    }, 5000);
  };
  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("userDatas"));
    this.setState({ member: userData });
    this.handleVisitedCount();
  }

  render() {
    // console.log(this.state.visitedCo);

    const { homepage_wrapper } = HomePageStyles;
    return (
      <>
        <DefaultHeader />
        <div className="cont">
          <HeaderView />
          <div className={homepage_wrapper}>
            <OverViews members={this.state.member} />
            <Section />
            <Navbar />
            <HighLights />
            <RecentActivity />
            <Threads />
            <ExploreBooks />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
export default Hompage;
