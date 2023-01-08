import React from "react";
import classes from "./MainTitle.module.css";

const MainTitle = (props) => {
  return <h2 className={classes["main-title"]}>{props.title}</h2>;
};

export default MainTitle;
