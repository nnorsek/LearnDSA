import React from "react";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.sizing}>
        <div className={styles.outline}>
          <div className={styles.left}>
            <div className={styles.infoIconContainer}>
              <span className={styles.infoIcon}>
                🎓Interactive Learning Platform
              </span>
            </div>
            <h1 className={styles.titleText}>
              Master Data Structures & Algorithms
            </h1>
            <p className={styles.description}>
              Write code, visualize solutions, and watch your algorithms come to
              life with interactive tree and array walkthroughs.
            </p>

            <div className={styles.buttons}>
              <button className={styles.getstartedforfree} onClick={() => ""}>
                Get Started For Free
              </button>
              <button className={styles.watchdemo} onClick={() => ""}>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
