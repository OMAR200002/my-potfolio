import React from "react";
import personalImage from "../../assets/personal-image2.png";
import classes from "./CardReflectHover.module.css";

const CardReflectHover = () => {
  return (
    <div className={classes.container}>
      <img src={personalImage} className={classes.image} alt="" />
    </div>
  );
};

export default CardReflectHover;
