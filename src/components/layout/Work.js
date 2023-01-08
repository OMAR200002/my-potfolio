import React from "react";
import Carousel from "../UI/Carousel";
import MainTitle from "../UI/MainTitle";
import Wave from "../UI/Wave";
import classes from "./Work.module.css";
const Work = () => {
  return (
    <section className={classes.work}>
      <MainTitle title="Work" />
      <Carousel />
      <Wave fill="#011936" />
    </section>
  );
};

export default Work;
