import React from "react";

const Box_1 = () => {
  return (
    <div class="box-1">
      <input placeholder="Name" type="text" name="name" id="N" /> <br />
      <input
        placeholder="User Number"
        type="text"
        name="user_number"
        id="UN"
      />{" "}
      <br />
      <input
        placeholder="User Department"
        type="text"
        name="user_department"
        id="UD"
      />{" "}
      <br />
      <input placeholder="Date" type="text" name="date" id="DA" /> <br />
      <input placeholder="Weed Day" type="text" name="weekday" id="WD" /> <br />
      <input placeholder="Author" type="text" name="author" id="A" /> <br />
      <input placeholder="Title" type="text" name="title" id="T" />
    </div>
  );
};
export default Box_1;
