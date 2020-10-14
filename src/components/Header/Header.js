import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ isAuthenticated }) => {
  return (
    <div className={styles.Header}>
      <NavLink to="/" className={styles.HeaderLink} exact>
        <p className={styles.HeaderText}>About Me</p>
      </NavLink>
      <NavLink to="/slills" className={styles.HeaderLink} exact>
        <p className={styles.HeaderText}> My Skills </p>
      </NavLink>
      <NavLink to="/projects " className={styles.HeaderLink} exact>
        <p className={styles.HeaderText}>My Projects </p>
      </NavLink>
      <NavLink to="/resume" className={styles.HeaderLink} exact>
        <p className={styles.HeaderText}>Ny resume</p>
      </NavLink>
    </div>
  );
};

export default Header;
