import Title from "@/components/title";
import Image from "next/image";
import KnotbinText from "./KnotbinText.svg";
import styles from "./page.module.css";
import Acheivements from "@/components/acheivements";

export default function Home() {
  return (
    <div>
      <div class="container">
        <Image src={KnotbinText} className={styles.titleicon}></Image>
      </div>
      <div class="sidecontainer">
        <Title></Title>
      </div>
      <div class="container">
        <Acheivements></Acheivements>
      </div>
    </div>
  );
}
