import styles from "../../styles/Home.module.css";
import SmoothList from "react-smooth-list";

export default function Navegation() {
  return (
    <SmoothList>
      <div className={styles.Navegation}>
        <h2>Matheus Alves</h2>
        <ul>
          <li>
            <a href="#Top">Home</a>
          </li>
          <li>
            <a href="#About">Sobre</a>
          </li>
          <li>
            <a href="#Services">Serviços</a>
          </li>
          <li>
            <a href="#Portifolio">Portifólio</a>
          </li>
          <li>
            <a href="#Contact">Me Contate</a>
          </li>
        </ul>
      </div>
    </SmoothList>
  );
}
