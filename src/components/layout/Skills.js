import React from "react";
import Wave from "../UI/Wave";
import classes from "./Skills.module.css";
import MainTitle from "../UI/MainTitle";
import Card from "../UI/Card";
import html from "../../assets/Skills/html.png";
import css from "../../assets/Skills/css.png";
import tailwind from "../../assets/Skills/tailwind.png";
import js from "../../assets/Skills/js.png";
import physics from "../../assets/Skills/physics.png";
import php from "../../assets/Skills/php.png";
import java from "../../assets/Skills/java.png";
import jee from "../../assets/Skills/JEE.png";
import sql from "../../assets/Skills/sql.png";
import android from "../../assets/Skills/android.png";
import javaFx from "../../assets/Skills/javafx.png";

const skills = [
  {
    skillImage: html,
    skillName: "Html",
  },
  {
    skillImage: css,
    skillName: "Css",
  },
  {
    skillImage: tailwind,
    skillName: "tailwind",
  },
  {
    skillImage: js,
    skillName: "Js",
  },
  {
    skillImage: physics,
    skillName: "React",
  },
  {
    skillImage: php,
    skillName: "Php",
  },
  {
    skillImage: java,
    skillName: "Java",
  },
  {
    skillImage: jee,
    skillName: "JEE",
  },
  {
    skillImage: sql,
    skillName: "Sql",
  },
  {
    skillImage: android,
    skillName: "Android development using Android Studio.",
  },
  {
    skillImage: javaFx,
    skillName: "JavaFx",
  },
];

const Skills = () => {
  return (
    <section className={classes.skills}>
      <MainTitle title="Skills" />
      <Card className={classes["skills-container"]}>
        {skills.map((skill) => (
          <div className={classes.box} key={skill.skillName}>
            <img src={skill.skillImage} alt={skill.skillName} />
            <p className={classes.skillName}>{skill.skillName}</p>
          </div>
        ))}
      </Card>
      <Wave fill="#001a50" />
    </section>
  );
};

export default Skills;
