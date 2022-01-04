import Image from "next/image";
import SmoothList from "react-smooth-list";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import profilePic from "../../public/Images/Save_perspective_matte.png";
export function About() {
  return (
    <SmoothList>
      <div className={styles.about} id="About">
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Image width="600px" height="600px" src={profilePic} alt="Eae" />
        </motion.div>
        <div className={styles.about_text}>
          <h4>Quem sou eu</h4>
          <br />
          <h1>Sobre</h1>
          <br />
          <h3>
            Me chamo Matheus Alves, um profissional e talentoso Designer com
            habilidades de Desenvolvimento Front-End. Sou apaixonado por
            alavancar minhas diversas origens para decifrar problemas
            desafiadores e criar experiências maravilhosas. Aprimorei minhas
            habilidades em Desenvolvidmento Web, redação técnica, design de
            interface e análise de SEO.
          </h3>
          <h3>
            Eu desenvolvo websites com HTML, CSS e JavaScript, uso React como
            ferramenta para o uso de todas as três de forma sólida. Eu tenho
            ótimas habilidades em uso de Figma, Adobe XD, Adobe Photoshop e
            Adobe Illustrator
          </h3>
          <h3>
            Me movo e trabalho para obter resultados em o mínimo de tempo
            possível, uso todo o meu 100% em cada projeto que coloco minhas mãos
          </h3>
          <button className={styles.cv_download}>Baixe meu CV</button>
        </div>
      </div>
    </SmoothList>
  );
}
