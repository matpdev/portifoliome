import styles from "../../styles/Home.module.css";
import SmoothList from "react-smooth-list";
import { useState } from "react";

export default function Navegation() {
  const [hambugerOpen, setHamburgerOpen] = useState(false);

  const Hamburger = () => {
    const toggleHambuger = () => {
      setHamburgerOpen(!hambugerOpen);
    };

    return (
      <>
        <div className="Hamburger" onClick={toggleHambuger}>
          <div className="burger burger1"></div>
          <div className="burger burger2"></div>
          <div className="burger burger3"></div>
        </div>
        <style jsx>
          {`
            .Hamburger {
              width: 2rem;
              height: 2rem;
              display: flex;
              justify-content: space-around;
              flex-direction: column;
              z-index: 10;
            }

            .burger {
              width: 2rem;
              height: 0.25rem;
              border-radius: 10px;
              background-color: white;
              transform-origin: 1px;
              transition: all 0.3s linear;
            }

            .Hamburger {
              display: none;
            }

            @media (max-width: 480px) {
              .Hamburger {
                display: flex;
                margin-right: 40px;
              }

              .Navegation {
                display: none;
              }
            }
          `}
        </style>
      </>
    );
  };

  return (
    <SmoothList>
      <div className={styles.Navegation_mobile}>
        <h2>Matheus Alves</h2>
        <Hamburger></Hamburger>
      </div>
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
            <a href="#Projects">Projetos</a>
          </li>
          <li>
            <a href="#Footer">Me Contate</a>
          </li>
        </ul>
      </div>
    </SmoothList>
  );
}
