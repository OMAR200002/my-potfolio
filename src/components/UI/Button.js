import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes["contact-btn"]} role="button">
      {props.children}
    </button>
  );
};

export default Button;
