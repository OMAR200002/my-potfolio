import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Header.module.css";
import { FiSend } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import Button from "../UI/Button";
import logo from "../../assets/logo.png";

const Header = (props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropDownHandler = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <header>
      <Card className={classes.container}>
        <div className={classes["logo-container"]}>
          <img src={logo} className={classes.logo} alt="Omar" />
        </div>
        <ul className={`${classes.links} ${isDropDownOpen && classes.open}`}>
          <li>
            <a href="#home" className={classes.active}>
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Skills</a>
          </li>
          <li>
            <a href="#contact">Work</a>
          </li>
          <li>
            <a href="#contact">Testimonials</a>
          </li>
        </ul>
        <div className={classes["button-container"]}>
          <Button role="button">
            Contact Now
            <FiSend className={classes["contact-icon"]} />
          </Button>
          <FaBars
            className={classes["burgar-icon"]}
            size={25}
            onClick={dropDownHandler}
          />
        </div>
      </Card>
    </header>
  );
};

export default Header;
