import { useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import css from "../../assets/images/css.png"
import express from "../../assets/images/express.png"
import html from "../../assets/images/html.png"
import javascript from "../../assets/images/javascript.png"
import nodejs from "../../assets/images/nodejs.png"
import postgresql from "../../assets/images/postgresql.png"
import react from "../../assets/images/react.png"
import sequelize from "../../assets/images/sequelize.png"

import styles from "../../styles/Skills.module.css"

const Skills = () => {
  const router = useRouter();

  useEffect(() => {
    var storage = localStorage.getItem("name");
    if (!storage) {
      return router.push("/");
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skills}>
        <ul>
          <Image
            className={styles.img}
            src={react}
            alt="react"
            width={90}
            height={90}
          />
          <Image
            className={styles.img}
            src={express}
            alt="express"
            width={90}
            height={90}
          />
          <Image
            className={styles.img}
            src={nodejs}
            alt="nodejs"
            width={90}
            height={90}
          />
          <Image
            className={styles.img}
            src={sequelize}
            alt="sequelize"
            width={90}
            height={90}
          />
        </ul>
        <ul>
          <Image
            className={styles.img}
            src={javascript}
            alt="javascript"
            width={90}
            height={90}
          />
          <Image
            className={styles.img}
            src={css}
            alt="css"
            width={90}
            height={90}
          />
          <Image
            className={styles.img}
            src={html}
            alt="html"
            width={90}
            height={90}
          />
          <Image
            className={styles.img}
            src={postgresql}
            alt="postgresql"
            width={90}
            height={90}
          />
        </ul>
      </div>
    </div>
  );
};

export default Skills;
