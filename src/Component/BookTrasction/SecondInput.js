import React from "react";

const Box_2 = () => {
  return (
    <div class="box-2">
      <input placeholder="Isbn" type="text" name="isbn" id="I" /> <br />
      <input
        placeholder="Accession Number"
        type="text"
        name="accession_number"
        id="AN"
      />{" "}
      <br />
      <input
        placeholder="Issue Date"
        type="date"
        name="issue_date"
        id="ID"
      />{" "}
      <br />
      <input
        placeholder="Return Date"
        type="date"
        name="return_day"
        id="RD"
      />{" "}
      <br />
      <input
        placeholder="Total Days"
        type="text"
        name="total_days"
        id="TD"
      />{" "}
      <br />
      <input
        placeholder="Added Day"
        type="number"
        name="added_days"
        id="AD"
      />{" "}
      <br />
      <input placeholder="Fine" type="number" name="fine" id="fine" value="" />
    </div>
  );
};
export default Box_2;
