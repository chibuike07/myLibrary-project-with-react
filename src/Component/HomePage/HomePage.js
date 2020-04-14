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
import "../landin-refix.css";

//component for home page
class Hompage extends Component {
  //setting member to the state
  state = {
    member: []
  };

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("userDatas"));
    this.setState({ member: userData });
  }

  render() {
    return (
      <>
        <DefaultHeader />
        <div className="cont">
          <HeaderView />
          <div className="tot-cont">
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
