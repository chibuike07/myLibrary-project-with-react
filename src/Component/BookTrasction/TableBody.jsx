import React, { useState, useEffect, Fragment } from "react";

const TableBody = ({ values }) => {
  const [datas, setData] = useState([]);
  const body = () => {
    setData(values);
  };
  useEffect(() => {
    body();
  });
  return (
    <tbody>
      {datas.map((values, i) => (
        <tr key={i}>
          <td>{values.name}</td>
          <td>{values.user_number}</td>
          <td>{values.user_department}</td>
          <td>{values.date}</td>
          <td>{values.weekday}</td>
          <td>{values.author}</td>
          <td>{values.title}</td>
          <td>{values.isbn}</td>
          <td>{values.accession_number}</td>
          <td>{values.issue_date}</td>
          <td>{values.return_day}</td>
          <td>{values.total_days}</td>
          <td>{values.added_days}</td>
          <td>{values.fine}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
