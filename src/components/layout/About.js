import React from "react";
import classes from "./About.module.css";
import CardReflectHover from "../UI/CardReflectHover";
import Card from "../UI/Card";
import { FiSend } from "react-icons/fi";
import MainTitle from "../UI/MainTitle";
import Button from "../UI/Button";
import Wave from "../UI/Wave";

const About = () => {
  return (
    <section className={classes.about}>
      <MainTitle title="About" />
      <Card className={classes.container}>
        <CardReflectHover />
        <div className={classes.text}>
          <p className={classes.title}>A Passionate Software Engineer</p>
          <p className={classes["about-text"]}>
            Hello! My name is Khadrouni Omar and I am a student at ENSAO
            studying software engineering. As a software engineer, I am
            constantly learning and striving to improve my skills in order to
            design and develop efficient and effective software solutions. In my
            free time, I enjoy staying up to date with the latest developments
            in technology and exploring new programming languages and
            frameworks. I am an active member of the "Club Genie Informatique"
            at ENSAO. I am excited to use my knowledge and expertise to make a
            positive impact in the world of software engineering.
          </p>
          <Button role="button" className={classes["contact-btn"]}>
            Contact Now
            <FiSend className={classes["contact-icon"]} />
          </Button>
        </div>
      </Card>
      <Wave fill="#011936" />
    </section>
  );
};

export default About;
