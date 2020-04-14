import React from "react";
import ContentStyles from "./LibraryCss _folder/Content.module.css";
import CustomList from "../Reuseable.component/List.component/List";
const Content = () => {
  //array for library departments
  const LibDepartments = [
    "Office Of The Librarian",
    "Technical Service Department",
    "Users Service Department",
    "E-Library Department"
  ];
  //destrctured content style module
  const { content } = ContentStyles;
  return (
    <>
      <div className={content}>
        <p>
          Unichris library is a library that hold collection of fiction and
          non-fiction book. As we all known is situated in the four walls of an
          instituation, so therefore is said to be academics library. <br />
          <br />
          Books here varies from department to faculty courses done by the
          school i.e social social sciences , business administration and school
          of humanities <br />
          <br />
          The library is fully stocked with serials, journals, periodicals,
          encyclopedia, research books and reference books , for students,
          staffs , community and researchers of knowledge.
        </p>
        <br /> <br />
        <p>
          The library is made up of different department that is further divided
          into sections to suit the user quest and for easy accessibity of the
          collection by the patrons ; the department are listed below:
        </p>
        <br />
        <br />
        <ul>
          {/*condition to check if the array exist and to the mapping through the departments array and append it to the customlist element */}
          {LibDepartments
            ? LibDepartments.map((department, i) => (
                <CustomList text={department} key={i} />
              ))
            : "library department still loading"}
        </ul>
        <br />
        <h4>Office Of The Librarian</h4>
        <br />
        <p>
          This is the department that carter for all the affairs of the library
          from funding to acquisations of library collection and the structures
        </p>
        <br />
        <h4>Technical Service Department</h4>
        <br />
        <p>
          This is where acquisation of books, given of accession number,call
          number, classification and cataloguing of books collections are been
          done
        </p>
        <br />
        <h4>Users Service Department</h4>
        <br />
        <p>
          This is where borrowing and lending of books , user place of reading ,
          and all the <br />
          collections are made available for our patrons here
        </p>
        <br />
        <h4>E-Library Department</h4>
        <br />
        <p>
          This is a department where information are accessed online and also it
          holds the <br />
          soft collections of the library and information about a particular
          book can be accessed in e-library
        </p>
        {/* <!-- <a href="main class.html"><button>mainclass collections</button></a> <a href="christopher.html"><button>Back to home</button></a> --> */}
      </div>
      <div id="root"></div>
    </>
  );
};

export default Content;
