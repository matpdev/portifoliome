import React from "react";
import { EditIcon, CalendarIcon, BoxIcon, CheckIcon } from "@iconicicons/react";
import styles from "../../styles/Home.module.css";

export default function WorkFlow() {
  return (
    <div className={styles.WorkFlow}>
      <div className={styles.Workflow_line}></div>
      <div className={styles.Workflow_super}>
        <div className={styles.Workflow_box}>
          <span></span>
          <div className={styles.workflow_content}>
            <h1>Sketch</h1>
            <EditIcon className={styles.icon_workflow}></EditIcon>
            <h3>
              Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie
              leo, vitae iaculis nisl.Vehicula non. Ut sed ex eros. Vivamus sit
              amet nibh non tellus tristique interdum.Nec orci ornare consequat.
              Praesent lacinia ultrices consectetur. Sed non ipsum felis.Paisis,
              filhis, espiritis santis.
            </h3>
          </div>
        </div>
        <div className={styles.Workflow_box}>
          <span></span>
          <div className={styles.workflow_content}>
            <h1>Planejamento</h1>
            <CalendarIcon className={styles.icon_workflow}></CalendarIcon>
            <h3>
              Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie
              leo, vitae iaculis nisl.Vehicula non. Ut sed ex eros. Vivamus sit
              amet nibh non tellus tristique interdum.Nec orci ornare consequat.
              Praesent lacinia ultrices consectetur. Sed non ipsum felis.Paisis,
              filhis, espiritis santis.
            </h3>
          </div>
        </div>
        <div className={styles.Workflow_box}>
          <span></span>
          <div className={styles.workflow_content}>
            <h1>Criação</h1>
            <BoxIcon className={styles.icon_workflow}></BoxIcon>
            <h3>
              Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie
              leo, vitae iaculis nisl.Vehicula non. Ut sed ex eros. Vivamus sit
              amet nibh non tellus tristique interdum.Nec orci ornare consequat.
              Praesent lacinia ultrices consectetur. Sed non ipsum felis.Paisis,
              filhis, espiritis santis.
            </h3>
          </div>
        </div>
        <div className={styles.Workflow_box}>
          <span></span>
          <div className={styles.workflow_content}>
            <h1>Entrega</h1>
            <CheckIcon className={styles.icon_workflow}></CheckIcon>
            <h3>
              Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie
              leo, vitae iaculis nisl.Vehicula non. Ut sed ex eros. Vivamus sit
              amet nibh non tellus tristique interdum.Nec orci ornare consequat.
              Praesent lacinia ultrices consectetur. Sed non ipsum felis.Paisis,
              filhis, espiritis santis.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
