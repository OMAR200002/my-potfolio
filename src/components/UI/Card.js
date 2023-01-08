import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const classes = styles.container + " " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
