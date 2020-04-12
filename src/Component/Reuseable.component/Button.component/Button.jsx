import React from "react";
import Button_Styles from "./Button.module.css";

const { button } = Button_Styles;
const Button = ({
  name,
  color,
  backgroundColor,
  click,
  text,
  handleSubmit,
  className,
  width,
  outline,
  margin,
  padding,
  border,
  borderRadius,
  ref
}) => (
  <div className="button">
    <button
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "red",
        color: color ? color : "#fff",
        width: width ? width : null,
        outline: outline ? outline : null,
        margin: margin ? margin : null,
        padding: padding ? padding : null,
        border: border ? border : null,
        borderRadius: borderRadius ? borderRadius : null
      }}
      onClick={click ? click : null}
      name={name ? name : null}
      onSubmit={handleSubmit ? handleSubmit : null}
      className={className ? className : button}
      ref={ref ? ref : null}
    >
      {text ? text : "click"}
    </button>
  </div>
);

export default Button;
