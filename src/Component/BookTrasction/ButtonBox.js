import React from "react";
import CustomButton from "../Reuseable.component/Button.component/Button";
const ButtonBox = ({ handleAddToTable, handleDayDifferent }) => {
  return (
    <div className="box-3">
      <CustomButton
        type={"submit"}
        text={"Check_data"}
        click={handleDayDifferent}
      />
      <CustomButton text={"Add_Data"} click={handleAddToTable} />
      <CustomButton text={"Save_data"} />
      <CustomButton text={"Edit_Data"} />
      <CustomButton text={">Remove_Data"} />
      {/* <button onclick="load(this)">load_books_Data</button> --> */}
    </div>
  );
};
export default ButtonBox;
