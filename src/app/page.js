import styles from "./page.module.css";
import Title from "@/components/title";
import Acheivements from "@/components/acheivements";
import LogoAnimation from "@/components/logoanimation";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <div>
      <LogoAnimation></LogoAnimation>
      <Title></Title>
      <Acheivements></Acheivements>
      <Socials></Socials>
    </div>
  );
}
