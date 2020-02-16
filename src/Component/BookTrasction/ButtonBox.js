import React from "react";

const ButtonBox = () => {
  return (
    <div class="box-3">
      <button type="submit" onclick="week(this)">
        Check_data
      </button>
      <button onclick="add()">Add_Data</button>
      <button onclick="save()">save_Data</button>
      <button onclick="editTable(this)">Edit_Data</button>
      <button onclick="remove(this)">Remove_Data</button>
      {/* <button onclick="load(this)">load_books_Data</button> --> */}
    </div>
  );
};
export default ButtonBox;
