import styles from "./page.module.css";
import Title from "@/components/title";
import Acheivements from "@/components/acheivements";
import LogoAnimation from "@/components/logoanimation";

export default function Home() {
  return (
    <div>
      <div class="container">
        <LogoAnimation></LogoAnimation>
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
