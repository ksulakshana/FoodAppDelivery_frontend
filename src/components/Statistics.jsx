import React from "react";
import styles from "./Statistics.module.css";

function Statistics() {
  return (
    <>
      <div className={styles.stats}>
        <p>546+</p>
        <span>Registered Riders</span>
      </div>
      <p className={styles.seperateStats}></p>

      <div className={styles.stats}>
        <p>789,900+</p>
        <span>Orders Delivered</span>
      </div>
      <p className={styles.seperateStats}></p>

      <div className={styles.stats}>
        <p>690+</p>
        <span>Restaurants Partnered</span>
      </div>
      <p className={styles.seperateStats}></p>

      <div className={styles.stats}>
        <p>17,457+</p>
        <span>Food items</span>
      </div>
    </>
  );
}

export default Statistics;
