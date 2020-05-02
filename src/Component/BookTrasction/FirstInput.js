import React from "react";
import CustomInput from "../Reuseable.component/Input.component/Input";
import FirstInputStyles from "./booktransaction_styles/FirstInput.module.css";
const BoxOne = ({ handleChange, values }) => {
  const {
    name,
    user_number,
    user_department,
    date,
    weekday,
    author,
    title
  } = values;

  const { box_1, inputBox } = FirstInputStyles;
  return (
    <div className={box_1}>
      <CustomInput
        placeholder={"Name"}
        type={"text"}
        name={"name"}
        id={"N"}
        value={name}
        onChange={handleChange}
        className={inputBox}
      />
      <br />
      <CustomInput
        placeholder={"User Number"}
        type={"text"}
        name={"user_number"}
        id={"UN"}
        value={user_number}
        onChange={handleChange}
        className={inputBox}
      />
      <br />
      <CustomInput
        placeholder={"User Department"}
        type={"text"}
        name={"user_department"}
        id={"UD"}
        value={user_department}
        onChange={handleChange}
        className={inputBox}
      />
      <br />
      <CustomInput
        placeholder={"Date"}
        type={"text"}
        name={"date"}
        value={date}
        onChange={handleChange}
        className={inputBox}
        readOnly={true}
      />

      <br />
      <CustomInput
        placeholder={"Weed Day"}
        type={"text"}
        name={"weekday"}
        id={"WD"}
        value={weekday}
        onChange={handleChange}
        className={inputBox}
        readOnly={true}
      />
      <br />
      <CustomInput
        placeholder={"Author"}
        type={"text"}
        name={"author"}
        id={"A"}
        value={author}
        onChange={handleChange}
        className={inputBox}
      />
      <br />
      <CustomInput
        placeholder={"Title"}
        type={"text"}
        name={"title"}
        id={"T"}
        value={title}
        onChange={handleChange}
        className={inputBox}
      />
    </div>
  );
};
export default BoxOne;
