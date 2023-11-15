import React, { Fragment } from "react";
import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  // Define a default class to ensure that the button-container class is always applied
  const buttonClasses = `button-containerr ${
    BUTTON_TYPE_CLASSES[buttonType] || ""
  }`;

  return (
    <div className={buttonClasses} {...otherProps}>
      {children}
    </div>
  );
};

export default Button;
