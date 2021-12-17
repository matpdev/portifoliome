import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import { About } from "../components/About";
import { Services } from "../components/Services";
const Home = dynamic({
  loader: () => import("../components/Home"),
});
const Navegation = dynamic({
  loader: () => import ("../components/Navegation")
});

export default function Start() {
  return (
    <>
      <div>
        <Navegation/>
        <Home></Home>
        <About></About>
        <Services></Services>
      </div>
    </>
  );
}
