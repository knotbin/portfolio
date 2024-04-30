import Title from "@/components/title";
import Image from "next/image";
import Knotbin from "./knotbin.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div class={styles.container}>
      <div className={styles.heroText}>
        <Title></Title>
      </div>
      <Image src={Knotbin} className={styles.icon} />
    </div>
  );
}
