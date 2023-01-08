import React from "react";
import classes from "./Footer";

const Footer = () => {
  return (
    <footer>
      <div className={classes["contact-info"]}>
        <h2>Contact Infos</h2>
        <ul>
          <li>+212 674-2879</li>
          <li>
            <a href="khdarouni.omar@ump.ac.ma">khdarouni.omar@ump.ac.ma</a>
          </li>
          <li>Oujda - Morocco - 60000</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
