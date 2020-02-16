import React, { Component } from "react";
import Box_1 from "./FirstInput/";
import Box_2 from "./SecondInput";
import SearchBar from "./SearchInput";
import ButtonBox from "./ButtonBox";
class BooksActivities extends Component {
  render() {
    return (
      <div class="table-container">
        <div class="manual">
          <cite id="cite">goin here</cite>
        </div>
        <h1> Keep Record Of Your Charging And Discharging Of Collections</h1>
        {/* <h3>instruction to filling of collection data</h3>
      <p style="text-align: center">
        Fill the following empty boxes except; Total_days, Added_days, and Fine.
        After filling correctly first hit the check button and then submit your
        datas
       </p> */}
        <div class="container">
          <form
            class="myForm"
            action="javascript:;"
            id="f"
            method="POST"
            autocomplete="off"
            onsubmit="event.preventDefault()"
          >
            <Box_1 />
            <Box_2 />
          </form>
          <ButtonBox />
          <SearchBar />
        </div>
        {/* <!-- <div class="clear"></div> --> */}

        <div class="tbl">
          <table id="table" border="2">
            <tbody id="tbody"></tbody>
          </table>
        </div>
      </div>
    );
  }
}
