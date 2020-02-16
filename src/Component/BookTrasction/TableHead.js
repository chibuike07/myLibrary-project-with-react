import React from "react";

let Haeding = [
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
        <th>Name</th>
        <th>User_number</th>
        <th>User_department</th>
        <th>Date</th>
        <th>Week_day</th>
        <th>Author</th>
        <th>Title</th>
        <th>Isbn</th>
        <th>Accession_number</th>
        <th>Issue_date</th>
        <th>Return_day</th>
        <th>Total_days</th>
        <th>Added_days</th>
        <th>Fine</th>
      </tr>
    </thead>
  );
};
export default TableHead;
