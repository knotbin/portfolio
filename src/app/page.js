import Title from "@/components/title";
import Image from "next/image";
import Knotbin from "./knotbin.svg";

export default function Home() {
  return (
    <div class="container">
      <div className="heroText">
        <Title></Title>
        <p>
          An iOS engineer making open-source software for people, not
          algorithms.
        </p>
      </div>
      <Image src={Knotbin} className="icon" />
    </div>
  );
}
