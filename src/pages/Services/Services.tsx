import { GridContainer } from "@/components/GridContainer";
import { Header } from "@/components/Header/Header";
import "./index.css";
import CardServices from "./components/CardServices";
import { MoveDown } from "lucide-react";
import { SlideLogo } from "./components/SlideLogo";
import { ShadowBg } from "@/components/ShadowBg";
import { QualityService } from "./components/QualityService";
import { HowItWorks } from "./components/HowItsWork";
import { Footer } from "@/components/Footer";
import { ToolsSlide } from "./components/ToolsSlide";
import { HandDrawnLine } from "@/components/HandDrawnLine";
import { GroupService } from "./components/Group-Services";


export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center relative ">
      <Header />
      <ShadowBg variant="shadowCenter" className="z-[-1]" />
      <ShadowBg variant="shadowRight" className="z-[-1] top-0" />
      <ShadowBg variant="shadowLeft" className="z-[-1] top-96" />
      <GridContainer className="flex flex-col gap-5 justify-center items-center">
        <div className="relative inline-block mt-20">
          <h1 className="font-gurajada text-5xl text-amber-400 relative z-10 px-4">
            Nossos serviços
          </h1>
          <HandDrawnLine width={250} height={100} strokeColor="#b84480"/>
        </div>
        <MoveDown
          size={28}
          strokeWidth={3}
          className="text-amber-400 mt-10 mb-10"
        />
        <div className="flex gap-5 items-center justify-center flex-wrap">
          <CardServices />
        </div>
        <SlideLogo />
        <div className="flex items-start justify-between w-full max-w-[890px] mb-40">
          <div className="relative">
            <img
              className="big-image-service"
              src="./big-image-service.jpg"
              alt="big-image-service"
            />
            <img
              className="absolute -right-12 -bottom-12 small-image-service"
              src="./small-image-service.jpg"
              alt="small-image-service"
            />
          </div>
          <div className="flex flex-col gap-12">
            <QualityService />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <HowItWorks />
        </div>
      </GridContainer>
      <ToolsSlide />
      <GridContainer className="mt-40 flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-40">
          <div className="relative inline-block mb-40">
            <h1 className="font-gurajada text-5xl text-amber-400 relative z-10 px-4">
              Nossos SaaS em serviços
            </h1>
            <HandDrawnLine width={400} height={100} strokeColor="#b84480"/>
          </div>
          <GroupService />
        </div>
      </GridContainer>
      <Footer />
      <ShadowBg variant="shadowRight" className="z-[-1] bottom-96" />
      <ShadowBg variant="shadowLeft" className="z-[-1] bottom-0" />
    </div>
  );
}
