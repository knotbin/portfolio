import Title from "@/components/title";
import Image from "next/image";
import Knotbin from "./knotbin.svg";

export default function Home() {
  return (
    <div class="container">
      <div className="heroText">
        <Title></Title>
      </div>
      <Image src={Knotbin} className="icon" />
    </div>
  );
}
