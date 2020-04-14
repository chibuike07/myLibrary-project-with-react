import React, { useState } from "react";
import HeaderNavBArStyles from "./LibraryCss _folder/HeaderNavBAr.module.css";
import CustomList from "../Reuseable.component/List.component/List";
import CustomButton from "../Reuseable.component/Button.component/Button";
import {
  DepartmentsArray,
  holdingsArray,
  DirectionsArray,
  LendingProceduresArray
} from "./Header_dropDowns";

const Librarian = ({ style }) => {
  return (
    <div id="Librarian" className={style}>
      <h1>Chief Librarian</h1>
      <h3
        style={{
          color: "#493ca2",
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px"
        }}
      >
        Mrs Ogechi Agu :
      </h3>
      <p style={{ textAlign: "center", color: "#493ca2" }}>
        She stands as the higher authority that supervises and manages the
        affairs of the library in other to ensure that the patrons are served
        not withstanding their research needs .
      </p>
    </div>
  );
};
const Departments = ({ style }) => {
  return (
    <div id="Departments" className={style}>
      <h1>Departments of Nelson Mandela Library</h1>
      <br />

      <ul>
        {DepartmentsArray
          ? DepartmentsArray.map((lists, i) => (
              <CustomList text={lists} key={i} color={"#493ca2"} />
            ))
          : null}
      </ul>
    </div>
  );
};

const Holdings = ({ style }) => {
  return (
    <div id="Holdings" className={style}>
      <h1>Holdings Of Nelson Mandela Library</h1>
      <br />

      <ul>
        {holdingsArray
          ? holdingsArray.map((lists, i) => (
              <CustomList text={lists} key={i} color={"#493ca2"} />
            ))
          : null}
      </ul>
    </div>
  );
};

const Directions = ({ style }) => {
  return (
    <div id="Directions" className={style}>
      <h1>Directions To Follow In The Library.</h1>
      <br />

      <ul>
        {DirectionsArray
          ? DirectionsArray.map((lists, i) => (
              <CustomList text={lists} key={i} color={"#493ca2"} />
            ))
          : null}
      </ul>
    </div>
  );
};

const LendingProcedures = ({ style }) => {
  return (
    <>
      <div id="LendingProcedures" className={style}>
        <h1>Procedures to Borrowing and Lending of Library Materials</h1>
        <br />

        <ul>
          {LendingProceduresArray
            ? LendingProceduresArray.map((lists, i) => (
                <CustomList text={lists} key={i} color={"#493ca2"} />
              ))
            : null}
        </ul>
      </div>
    </>
  );
};

const HeaderNavBar = () => {
  const [displayable, setDisplayable] = useState(<Librarian />);

  const displayUnits = ({ target }) => {
    let current = target.innerText;

    if (current === "Chief Librarian") {
      setDisplayable(<Librarian style={tabcontent} />);
      return;
    } else if (current === "Departments") {
      setDisplayable(<Departments style={tabcontent} />);
      return;
    } else if (current === "Holdings") {
      setDisplayable(<Holdings style={tabcontent} />);
      return;
    } else if (current === "Directions") {
      setDisplayable(<Directions style={tabcontent} />);
      return;
    } else if (current === "Lending Procedures") {
      setDisplayable(<LendingProcedures style={tabcontent} />);
      return;
    }
  };
  const {
    tabcontent,
    tablink,
    displaying,
    header_wrapper,
    header_buttons
  } = HeaderNavBArStyles;
  return (
    <div className={header_wrapper}>
      <p
        style={{
          color: "#493ca2",
          textAlign: "left",
          marginBottom: "30px",
          padding: "10px"
        }}
      >
        Click on the buttons inside the tabbed menu:
      </p>
      <div className={displaying}>{displayable}</div>
      <div className={header_buttons}>
        <CustomButton
          className={tablink}
          id={"defaultOpen"}
          click={displayUnits}
          text={"Chief Librarian"}
          backgroundColor={"#493ca2"}
        />
        <CustomButton
          className={tablink}
          click={displayUnits}
          text={"Departments"}
          backgroundColor={"#493ca2"}
        />
        <CustomButton
          className={tablink}
          click={displayUnits}
          text={"Holdings"}
          backgroundColor={"#493ca2"}
        />
        <CustomButton
          className={tablink}
          click={displayUnits}
          text={"Directions"}
          backgroundColor={"#493ca2"}
        />
        <CustomButton
          className={tablink}
          click={displayUnits}
          text={"Lending Procedures"}
          backgroundColor={"#493ca2"}
        />
      </div>
    </div>
  );
};
export default HeaderNavBar;
