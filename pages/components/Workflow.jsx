import React from "react";
import { EditIcon, CalendarIcon, BoxIcon, CheckIcon } from "@iconicicons/react";
import styles from "../../styles/Home.module.css";

export default function WorkFlow() {
  return (
    <div className={styles.WorkFlow} id="Projects">
      <div className={styles.Workflow_line}></div>
      <div className={styles.Workflow_super}>
        <div className={styles.Workflow_box}>
          <span></span>
          <div className={styles.workflow_content}>
            <h1>Sketch</h1>
            <EditIcon className={styles.icon_workflow}></EditIcon>
            <h3>
              É feito uma maquete, uma ideia de todas as coisas a serem
              implementadas, com todas as novidades, implementações e possíveis
              problemas a serem resolvidos.
            </h3>
          </div>
        </div>
        <div className={styles.Workflow_box}>
          <span></span>
          <div className={styles.workflow_content}>
            <h1>Planejamento</h1>
            <CalendarIcon className={styles.icon_workflow}></CalendarIcon>
            <h3>
              Datas e horários para criação, é passado todas os itens que serão
              implementados e o tempo decorrido para cada uma delas até a
              finalização do projeto.
            </h3>
          </div>
        </div>
        <div className={styles.Workflow_box}>
          <span></span>
          <div className={styles.workflow_content}>
            <h1>Criação</h1>
            <BoxIcon className={styles.icon_workflow}></BoxIcon>
            <h3>
              Após a aprovação, é criado todo a ideia com base nas cores, estilo
              e tema do cliente, de acordo com seu negócio para dar o máximo de
              autenticidade para o investimento.
            </h3>
          </div>
        </div>
        <div className={styles.Workflow_box}>
          <span></span>
          <div className={styles.workflow_content}>
            <h1>Entrega</h1>
            <CheckIcon className={styles.icon_workflow}></CheckIcon>
            <h3>
              Com todas as ideias em ação, todos os lados do projeto é colocado
              em produção, assim sendo entregue ao cliente, para uso e
              divulgação, com suporte total para possíveis bugs que possam
              ocorrer.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
