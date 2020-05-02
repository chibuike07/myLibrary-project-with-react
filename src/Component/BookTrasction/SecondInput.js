import React from "react";
import CustomInput from "../Reuseable.component/Input.component/Input";
import SecondInputStyle from "./booktransaction_styles/SecondInput.module.css";
const BoxTwo = ({ handleChange, values, handleFine }) => {
  const {
    isbn,
    accession_number,
    issue_date,
    return_day,
    total_days,
    added_days,
    fine
  } = values;
  const { box_2, inputBox } = SecondInputStyle;
  return (
    <div className={box_2}>
      <CustomInput
        placeholder={"Isbn"}
        type={"text"}
        name={"isbn"}
        id={"I"}
        value={isbn}
        onChange={handleChange}
        className={inputBox}
      />

      <br />
      <CustomInput
        placeholder={"Accession Number"}
        type={"text"}
        name={"accession_number"}
        id={"AN"}
        value={accession_number}
        onChange={handleChange}
        className={inputBox}
      />
      <br />
      <CustomInput
        placeholder={"Issue Date"}
        type={"date"}
        name={"issue_date"}
        id={"ID"}
        value={issue_date}
        onChange={handleChange}
        className={inputBox}
      />
      <br />
      <CustomInput
        placeholder={"Return Date"}
        type={"date"}
        name={"return_day"}
        id={"RD"}
        value={return_day}
        onChange={handleChange}
        className={inputBox}
      />
      <br />
      <CustomInput
        placeholder={"Total Days"}
        type={"text"}
        name={"total_days"}
        id={"TD"}
        value={total_days}
        onChange={handleChange}
        className={inputBox}
        readOnly={true}
      />
      <br />
      <CustomInput
        placeholder={"Added Day"}
        type={"number"}
        name={"added_days"}
        id={"AD"}
        value={added_days}
        onChange={handleChange}
        className={inputBox}
        readOnly={true}
        onInput={handleFine}
      />
      <br />
      <CustomInput
        placeholder={"Fine"}
        type={"number"}
        name={"fine"}
        id={"fine"}
        value={fine}
        onChange={handleChange}
        className={inputBox}
        readOnly={true}
      />
    </div>
  );
};
export default BoxTwo;
