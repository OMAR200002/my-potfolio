import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Landing.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { BiCloudDownload } from "react-icons/bi";
import personalImage from "../../assets/personal-image2.png";
import GoDown from "../UI/GoDown";

const Landing = (props) => {
  return (
    <div className={classes.landing}>
      <Card className={classes.container}>
        <div className={classes["H-triangles"]}>
          <div className={classes["triangle-right"]}></div>
          <div className={classes["triangle-right"]}></div>
          <div className={classes["triangle-right"]}></div>
          <div className={classes["triangle-right"]}></div>
          <div className={classes["triangle-right"]}></div>
        </div>
        <div className={classes["V-triangles"]}>
          <div className={classes["triangle-down"]}></div>
          <div className={classes["triangle-down"]}></div>
          <div className={classes["triangle-down"]}></div>
          <div className={classes["triangle-down"]}></div>
          <div className={classes["triangle-down"]}></div>
        </div>

        <div className={classes.text}>
          <div>
            <p>
              Hi, I'm omar
              <br />
              Software Engineer
            </p>
            <hr />
            <p className={classes["sub-title"]}>
              Passionate About Crafting Elegant Code
            </p>
            <Button>
              <BiCloudDownload size={25} className={classes["download-icon"]} />
              Download Cv
            </Button>
          </div>
        </div>
        <div className={classes["personal-image"]}>
          <img src={personalImage} />
        </div>
        <div className={classes["social-media"]}>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
        <GoDown />
      </Card>
    </div>
  );
};

export default Landing;
