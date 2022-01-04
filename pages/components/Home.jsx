import Image from "next/image";
import SmoothList from "react-smooth-list";
import { motion } from "framer-motion";
import profilePic from "../../public/Images/Save_perspective_matte.png";
import styles from "../../styles/Home.module.css";
export default function Home() {
  return (
    <SmoothList>
      <div className={styles.home}>
        <div className={styles.home_text}>
          <h4>
            Opa, eae? Sou <br />
          </h4>
          <h1>
            Matheus <br />
            Alves
          </h1>
          <h4 className={styles.home_habilities}>
            DESIGNER + DESENVOLVEDOR WEB
          </h4>
          <p>
            Eu sou um Designer e desenvolvedor front-end júnior. <br />
            Atualmente Trabalho como Desenvolvedor Front-end Júnior Full Time
          </p>
          <button className={styles.hire_me}>Me chame</button>
        </div>
        <motion.div animate={{y: [0, 15, 0]}} transition={{duration: 3, repeat: Infinity}}>
          <Image width="600px" height="600px" src={profilePic} alt="Eae" />
        </motion.div>
      </div>
    </SmoothList>
  );
}
