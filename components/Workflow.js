import React from "react";
import styles from "../styles/Home.module.css";

export default function WorkFlow() {
  return (
    <div className={styles.WorkFlow}>
      <div className={styles.Workflow_line}></div>
      <div className={styles.Workflow_super}>
        <div className={styles.Workflow_box}>
          <span></span>
        </div>
        <div className={styles.Workflow_box}>
          <span></span>
        </div>
        <div className={styles.Workflow_box}>
          <span></span>
        </div>
        <div className={styles.Workflow_box}>
          <span></span>
        </div>
      </div>
    </div>
  );
}
