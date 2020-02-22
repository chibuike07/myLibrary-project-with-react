import React, { Component } from "react";
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
class Hompage extends Component {
  render() {
    return (
      <>
        <div className="cont">
          <HeaderView />
          <div className="tot-cont">
            <OverViews />
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
