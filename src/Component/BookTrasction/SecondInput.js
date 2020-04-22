import React from "react";
import CustomInput from "../Reuseable.component/Input.component/Input";

const BoxTwo = ({ handleChange, values }) => {
  const {
    isbn,
    accession_number,
    issue_date,
    return_day,
    total_days,
    added_days,
    fine
  } = values;
  // console.log(values);
  // console.log(isbn);
  return (
    <div className="box-2">
      <CustomInput
        placeholder={"Isbn"}
        type={"text"}
        name={"isbn"}
        id={"I"}
        value={isbn}
        onChange={handleChange}
      />

      <br />
      <CustomInput
        placeholder={"Accession Number"}
        type={"text"}
        name={"accession_number"}
        id={"AN"}
        value={accession_number}
        onChange={handleChange}
      />
      <br />
      <CustomInput
        placeholder={"Issue Date"}
        type={"date"}
        name={"issue_date"}
        id={"ID"}
        value={issue_date}
        onChange={handleChange}
      />
      <br />
      <CustomInput
        placeholder={"Return Date"}
        type={"date"}
        name={"return_day"}
        id={"RD"}
        value={return_day}
        onChange={handleChange}
      />
      <br />
      <CustomInput
        placeholder={"Total Days"}
        type={"text"}
        name={"total_days"}
        id={"TD"}
        value={total_days}
        onChange={handleChange}
      />
      <br />
      <CustomInput
        placeholder={"Added Day"}
        type={"number"}
        name={"added_days"}
        id={"AD"}
        value={added_days}
        onChange={handleChange}
      />
      <br />
      <CustomInput
        placeholder={"Fine"}
        type={"number"}
        name={"fine"}
        id={"fine"}
        value={fine}
        onChange={handleChange}
      />
    </div>
  );
};
export default BoxTwo;
