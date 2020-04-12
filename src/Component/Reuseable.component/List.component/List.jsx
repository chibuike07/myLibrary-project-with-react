import React from "react";
import listStyles from "./List.module.css";
const Lists = ({ className, color, text, paddingTop, marginTop }) => {
  const { list } = { listStyles };
  return (
    <li
      className={className ? className : list}
      style={{
        color: color,
        paddingTop: paddingTop ? paddingTop : "",
        marginTop: marginTop ? marginTop : "10px"
      }}
    >
      {text}
    </li>
  );
};
export default Lists;
