import React from "react";
import CustomButton from "../Reuseable.component/Button.component/Button";
import ButtonBoxStyles from "./booktransaction_styles/BottonBox.module.css";

const ButtonBox = ({ handleAddToTable, handleDayDifferent, handleSave }) => {
  const { button_wrapper, button } = ButtonBoxStyles;
  return (
    <div className={button_wrapper}>
      <CustomButton
        type={"submit"}
        text={"Check_data"}
        click={handleDayDifferent}
        backgroundColor={"#494ca2"}
        className={button}
      />
      <CustomButton
        text={"Add_Data"}
        click={handleAddToTable}
        backgroundColor={"#494ca2"}
        className={button}
      />
      <CustomButton
        text={"Save_data"}
        className={button}
        backgroundColor={"#494ca2"}
        click={handleSave}
      />
      <CustomButton
        text={"Edit_Data"}
        className={button}
        backgroundColor={"#494ca2"}
      />
      <CustomButton text={"Remove_Data"} className={button} />

      {/* <button onclick="load(this)">load_books_Data</button> --> */}
    </div>
  );
};
export default ButtonBox;
