import React from "react";
import { FaChevronDown } from "react-icons/fa";
import classes from "./GoDown.module.css";

const GoDown = () => {
  return (
    <a href="#" className={classes["go-down"]}>
      <FaChevronDown />
      <FaChevronDown />
      <FaChevronDown />
    </a>
  );
};

export default GoDown;
