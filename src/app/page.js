import Title from "@/components/title";
import Image from "next/image";
import Knotbin from "./knotbin.svg";
import KnotbinText from "./KnotbinText.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div class={styles.container}>
        <Image src={KnotbinText} className={styles.titleicon}></Image>
      </div>
      <div class={styles.sidecontainer}>
        <Title></Title>
      </div>
    </div>
  );
}
