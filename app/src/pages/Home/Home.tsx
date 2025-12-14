import React from "react";
import styles from "./Home.module.css";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "../../images/code_coffee.webp";
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
                Get Started For Free <ArrowRight />
              </button>
              <button className={styles.watchdemo} onClick={() => ""}>
                <Play />
                Watch Demo
              </button>
            </div>
            <hr className={styles.line} />
            <div className={styles.dataContainer}>
              <div>
                <p className={styles.problemsNumber}>500+</p>
                <p className={styles.problemsText}>Problems</p>
              </div>
              <div>
                <p className={styles.studentsNumber}>50K+</p>
                <p className={styles.studentsText}>Students</p>
              </div>
              <div>
                <p className={styles.successNumber}>95%</p>
                <p className={styles.successText}>Success Rate</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
