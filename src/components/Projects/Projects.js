import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.hometitle}>Projects</h1>
      <div className={styles.projectsBlock}>
        <h2 className={styles.projectsTitle}>HTML/CSS</h2>
        <ul className={styles.projectsUl}>
          <li className={styles.projectsPage}>
            <img
              src="./image/"
              alt="Previous "
              className={styles.projectsPageImg}
            />
            <a
              href="http://extreme-exterminating.com"
              className={styles.projectsPageA}
            >
              Page
            </a>
            <p className={styles.projectsTxt}></p>
          </li>
          <li className={styles.projectsPage}>
            <img
              src="./image/"
              alt="Previous "
              className={styles.projectsPageImg}
            />
            <a
              href="https://kristinalobanets.github.io/Lobanets_Test/Glyanec/"
              className={styles.projectsPageA}
            >
              Page
            </a>
            <p className={styles.projectsTxt}></p>
          </li>
          <li className={styles.projectsPage}>
            <img
              src="./image/"
              alt="Previous "
              className={styles.projectsPageImg}
            />
            <a
              href="https://kristinalobanets.github.io/goit-fe-course/html-css/module-10/"
              className={styles.projectsPageA}
            >
              Page
            </a>
            <p className={styles.projectsTxt}></p>
          </li>
          <li className={styles.projectsPage}>
            <img
              src="./image/"
              alt="Previous "
              className={styles.projectsPageImg}
            />
            <a
              href="https://kristinalobanets.github.io/goit-fe-course/html-css/module-07/"
              className={styles.projectsPageA}
            >
              Page
            </a>
            <p className={styles.projectsTxt}></p>
          </li>
          <li className={styles.projectsPage}>
            <img
              src="./image/"
              alt="Previous "
              className={styles.projectsPageImg}
            />
            <a
              href="https://kristinalobanets.github.io/goit-fe-course/html-css/module-06/"
              className={styles.projectsPageA}
            >
              Page
            </a>
            <p className={styles.projectsTxt}></p>
          </li>
          <li className={styles.projectsPage}>
            <img
              src="./image/"
              alt="Previous "
              className={styles.projectsPageImg}
            />
            <a
              href="https://kristinalobanets.github.io/goit-fe-course/html-css/module-05/"
              className={styles.projectsPageA}
            >
              Page
            </a>
            <p className={styles.projectsTxt}></p>
          </li>
          <li className={styles.projectsPage}>
            <img
              src="./image/"
              alt="Previous "
              className={styles.projectsPageImg}
            />
            <a
              href="https://kristinalobanets.github.io/goit-fe-course/html-css/module-04/"
              className={styles.projectsPageA}
            >
              Page
            </a>
            <p className={styles.projectsTxt}></p>
          </li>
        </ul>
      </div>
      <div className={styles.projectsBlock}>
        <h2 className={styles.projectsTitle}>JavaScript </h2>
      </div>
      <div className={styles.projectsBlock}>
        <h2 className={styles.projectsTitle}>React</h2>
      </div>
    </div>
  );
};

export default Projects;
