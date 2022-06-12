import React from "react";
import SmoothList from "react-smooth-list";
import styles from "../../styles/Home.module.css";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <SmoothList>
      <div className={styles.Footer} id="Footer">
        <div className={styles.Footer_header_content}>
          <h4>Quer falar comigo?</h4>
          <h1>Contato</h1>
        </div>
        <div className={styles.Footer_Content}>
          <div className={styles.Footer_divisor_horizontal}></div>
          <a href="#">
            <FaWhatsapp className={styles.icon_Footer} />
          </a>
          <a href="#">
            <FaFacebook className={styles.icon_Footer} />
          </a>
          <a href="#">
            <FaInstagram className={styles.icon_Footer} />
          </a>
          <a href="#">
            <FaLinkedin className={styles.icon_Footer} aria-hidden="true" />
          </a>
          <div className={styles.Footer_divisor_horizontal}></div>
        </div>
        <div className={styles.Footer_divisor_vertical}></div>
        <div className={styles.Footer_footer}>
          <h1>Matheus Alves Pereira</h1>
          <h2>Desenvolvedor Front-end</h2>
        </div>
        <div className={styles.Footer_copyright}>
          <h4>Todos os direitos reservados - Matheus Alves</h4>
        </div>
      </div>
    </SmoothList>
  );
};

export default Footer;
