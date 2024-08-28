/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import { BioInfo } from "./components/BioInfo";

export default function Home() {
  return (
    <main className={styles.main}>
      <img src="/Cover.svg" alt="" className={styles.cover} />
      <BioInfo />
    </main>
  );
}
