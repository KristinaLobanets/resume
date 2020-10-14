import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div classNames={styles.home}>
      <div classNames={styles.homephoto}></div>
      <h1 classNames={styles.homename}>Kristina Lobanets</h1>
      <div classNames={styles.homeinfo}></div>
    </div>
  );
};

export default Home;
