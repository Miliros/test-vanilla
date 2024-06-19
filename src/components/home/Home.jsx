import React from "react";
import styles from "./Home.module.scss";
import { NavBar } from "../navBar/NavBar";
import { Cards } from "../cards/Cards";

export const Home = () => {
  return (
    <div className={styles.cntnHome}>
      <div className={styles.headerText}>
        <p className={styles.pHeader}>
          Bienvenidos a nuestra página de fotografía
        </p>
      </div>
      <NavBar />

      <div className={styles.divOne}>
        <div className={styles.contenedor}>
          <p className={styles.prevTitle}>PÁGINA WEB DE FOTOGRAFÍA</p>
          <div className={styles.cntnTitle}>
            <p className={styles.firstTitle}>Web site </p>
            <p className={styles.firstTitle}>fotografía</p>
          </div>
        </div>
        <div className={styles.buttonSend}>
          <button className={styles.button}>Enviar</button>
        </div>
        <div className={styles.halfCircle}></div>
      </div>
      <div className={styles.divTwo}>
        <Cards />
        <div className={styles.smallHalfCircle}></div>
      </div>
    </div>
  );
};
