import React from "react";
import CustomButton from "../Reuseable.component/Button.component/Button";
import ButtonBoxStyles from "./booktransaction_styles/BottonBox.module.css";

const ButtonBox = ({
  handleAddToTable,
  handleSave,
  handleEdit,
  handleRemoveCollection
}) => {
  const { button_wrapper, button } = ButtonBoxStyles;
  return (
    <div className={button_wrapper}>
      {/* <CustomButton
        type={"submit"}
        text={"Check_data"}
        backgroundColor={"#494ca2"}
        className={button}
      /> */}

      <CustomButton
        text={"Add_Data"}
        click={handleAddToTable}
        backgroundColor={"#494ca2"}
        className={button}
      />

      {/* <CustomButton
        text={"Save_data"}
        className={button}
        backgroundColor={"#494ca2"}
        click={handleSave}
      /> */}

      <CustomButton
        text={"Edit_Data"}
        className={button}
        backgroundColor={"#494ca2"}
        click={handleEdit}
      />
      <CustomButton
        text={"Remove_Data"}
        className={button}
        click={handleRemoveCollection}
      />
    </div>
  );
};
export default ButtonBox;
