import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homephoto}></div>
      <h1 className={styles.homename}>Kristina Lobanets</h1>
      <div className={styles.homeinfo}></div>
    </div>
  );
};

export default Home;
