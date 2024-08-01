import styles from "./page.module.css";
import Title from "@/components/title";
import Acheivements from "@/components/acheivements";
import LogoAnimation from "@/components/logoanimation";
import Socials from "@/components/socials";
import MementoTitle from "@/components/mementolink";

export default function Home() {
  return (
    <div>
      <LogoAnimation></LogoAnimation>
      <Title></Title>
      <MementoTitle></MementoTitle>
      <Acheivements></Acheivements>
      <Socials></Socials>
    </div>
  );
}
