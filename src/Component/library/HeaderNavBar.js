import React, { useState } from "react";
import "./LibraryCss _folder/HeaaderNavBAr.css";

//display content of header bar
// const openCity = (cityName, elmnt, color) => {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//   }
//   document.getElementById(cityName).classList.add("active");
//   elmnt.style.backgroundColor = color;
// };

const Librarian = () => {
  return (
    <div id="Librarian" className="tabcontent">
      <h1>Chief Librarian</h1>
      <h3>Mrs Ogechi Agu :</h3>
      <p>
        She stands as the higher authority that supervises and manages the
        affairs of the library in other to ensure that the patrons are served
        not withstanding their research needs .
      </p>
    </div>
  );
};
const Departments = () => {
  return (
    <div id="Departments" className="tabcontent">
      <h1>Departments of Nelson Mandela Library</h1>
      <br />

      <ul>
        <li> Administrative Office.</li>
        <br />
        <li>Technical Service Departments</li>
        <br />
        <li>User Service Departments</li>
        <br />
        <li>E-Library Departments</li>
        <br />
      </ul>
    </div>
  );
};

const Holdings = () => {
  return (
    <div id="Holdings" className="tabcontent">
      <h1>Holdings Of Nelson Mandela Library</h1>
      <br />

      <ul>
        <li>Books On Social Sciences</li>
        <br />
        <li>Books On Business Studies</li>
        <br />
        <li>Book on humanities</li>
        <br />
        <li>Journals</li>
        <br />
        <li>Newapapers</li>
        <br />
        <li>Encyclopedia</li>
        <br />
        <li>Year Books</li>
        <br />
        <li>Research Books</li>
        <br />
        <li>Magazine</li>
        <br />
        <li>Reference Materials</li>
        <br />
      </ul>
    </div>
  );
};

const Directions = () => {
  return (
    <div id="Directions" className="tabcontent">
      <h1>Directions To Follow In The Library.</h1>
      <br />

      <ul>
        <li>On arrival to the library, locate the librarian</li>
        <br />
        <li>Make sure that you sign in</li>
        <br />
        <li>
          leave your belongings with the luggage box (Non books materials)
        </li>
        <br />
        <li>
          Consult any Library staff for proper guide to your research needs
        </li>
        <br />
        <li>After which you quitely move to the designated reading table</li>
        <br />
        <li>Always put your phone on silence</li>
        <br />
        <li>Always sign out on your way out </li>
        <br />
      </ul>
    </div>
  );
};

const LendingProcedures = () => {
  return (
    <>
      <div id="LendingProcedures" className="tabcontent">
        <h1>Procedures to Borrowing and Leanding of Library Materials</h1>
        <br />

        <ul>
          <li>Approach the librarian with the Material in questions</li>
          <br />
          <li>Fill the following gaps needed</li>
          <br />
          <li>Endeavour to return the material in a week time</li>
          <br />
          <li>
            Failure to return it incurs a fine according to the extended
            duration
          </li>
          <br />
        </ul>
      </div>
    </>
  );
};

const HeaderNavBar = () => {
  const [displayable, setDisplayable] = useState(<Librarian />);

  const displayUnits = e => {
    let current = e.target.innerText;

    if (current === "Chief Librarian") {
      setDisplayable(<Librarian />);
      return;
    } else if (current === "Departments") {
      setDisplayable(<Departments />);
      return;
    } else if (current === "Holdings") {
      setDisplayable(<Holdings />);
      return;
    } else if (current === "Directions") {
      setDisplayable(<Directions />);
      return;
    } else if (current === "Lending Procedures") {
      setDisplayable(<LendingProcedures />);
      return;
    }
  };

  return (
    <div style={{ maxHeight: "30%" }}>
      <p style={{ color: "#493ca2" }}>
        Click on the buttons inside the tabbed menu:
      </p>
      <div className="displaying">{displayable}</div>
      <div className="btns">
        <button className="tablink" id="defaultOpen" onClick={displayUnits}>
          Chief Librarian
        </button>
        <button className="tablink" onClick={displayUnits}>
          Departments
        </button>
        <button className="tablink" onClick={displayUnits}>
          Holdings
        </button>
        <button className="tablink" onClick={displayUnits}>
          Directions
        </button>
        <button className="tablink" onClick={displayUnits}>
          Lending Procedures
        </button>
      </div>
    </div>
  );
};
export default HeaderNavBar;
