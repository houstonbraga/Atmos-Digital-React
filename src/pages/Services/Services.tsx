import { GridContainer } from "@/components/GridContainer";
import { Header } from "@/components/Header/Header";
import "./index.css";
import CardServices from "./components/CardServices";
import { MoveDown } from "lucide-react";
import { SlideLogo } from "./components/SlideLogo";
import { ShadowBg } from "@/components/ShadowBg";

export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center relative ">
      <Header />
      <ShadowBg variant="shadowCenter" className="z-[-1]"/>
      <ShadowBg variant="shadowRight" className="z-[-1]"/>
      <GridContainer className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl font-gurajada text-amber-400 mt-16">
          Nossos serviços
        </h1>
        <MoveDown size={28} strokeWidth={3} className="text-amber-400 mt-10 mb-10" />
        <div className="flex gap-5 items-center justify-center flex-wrap">
          <CardServices />
        </div>
      </GridContainer>
      <SlideLogo />
      <ShadowBg variant="shadowLeft" className="z-[-1] -bottom-8"/>
    </div>
  );
}
