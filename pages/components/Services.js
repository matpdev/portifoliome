import Head from "next/head";
import Image from "next/image";
import { CodeIcon, HashtagIcon, GlobeIcon } from "@iconicicons/react";
import SmoothList from "react-smooth-list";
import { motion } from "framer-motion";
import WorkFlow from "./Workflow";
import styles from "../../styles/Home.module.css";
export function Services() {
  return (
    <SmoothList>
      <div className={styles.cards}>
        <div className={styles.cards_text}>
          <h4>O que faço</h4>
          <h1>Serviços</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.box}>
            <span></span>
            <div className={styles.content}>
              <CodeIcon className={styles.icon} />
              <h2>Desenvolvedor Front-End</h2>
              <p>
                Eu uso várias tecnologias da web para desenvolver sites
                atraentes que convertem visitantes em clientes. Desenvolvo
                layouts de sites criativos e responsivos.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <span></span>
            <div className={styles.content}>
              <HashtagIcon className={styles.icon} />
              <h2>Social Media</h2>
              <p>
                Trabalho com criações de <strong>Posts</strong>, Reels e Stories
                para Social Media, para melhorar alcances e o crescimento do
                negócio para o público.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <span></span>
            <div className={styles.content}>
              <GlobeIcon className={styles.icon} />
              <h2>Web Design</h2>
              <p>
                Eu trabalho com ferramentas onde crio e publico ideias, temas,
                UI&apos;s, da melhor forma possível para gerar mais valor ao
                negócio!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cards_text}>
          <h4>Como faço</h4>
          <h1>Workflow</h1>
          <WorkFlow></WorkFlow>
        </div>
      </div>
    </SmoothList>
  );
}
