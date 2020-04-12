import React from "react";
import ImageStyles from "./Image.module.css";
const Image = ({
  className,
  width,
  height,
  src,
  alt,
  position,
  top,
  left,
  right,
  bottom,
  onclick,
  transform,
  margin,
  padding,
  zIndex,
  id,
  type
}) => {
  const { custom_image, custom_image_wrapper } = ImageStyles;
  return (
    <div className={custom_image_wrapper}>
      <img
        style={{
          width: width ? width : null,
          height: height ? height : null,
          position: position ? position : null,
          zIndex: zIndex ? zIndex : null,
          margin: margin ? margin : null,
          top: top ? top : null,
          left: left ? left : null,
          bottom: bottom ? bottom : null,
          right: right ? right : null,
          padding: padding ? padding : null,
          transform: transform ? transform : null
        }}
        src={src}
        alt={alt}
        className={className ? className : custom_image}
        onClick={onclick ? onclick : null}
        id={id ? id : null}
        type={type ? type : null}
      />
    </div>
  );
};

export default Image;
