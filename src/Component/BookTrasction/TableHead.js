import React from "react";

let Heading = [
  "Name",
  "User_number",
  "User_department",
  "Date",
  "Week_day",
  "Author",
  "Title",
  "Isbn",
  "Accession_number",
  "Issue_date",
  "Return_day",
  "Total_days",
  "Added_days",
  "Fine"
];
const TableHead = () => {
  return (
    <thead>
      <tr>
        {Heading.map((tableHead, i) => (
          <th key={i}>{tableHead}</th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHead;
