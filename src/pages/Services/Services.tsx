import { GridContainer } from "@/components/GridContainer";
import { Header } from "@/components/Header/Header";
import "./index.css";
import CardServices from "./components/CardServices";
import { SlideLogo } from "./components/SlideLogo";
import { ShadowBg } from "@/components/ShadowBg";
import { HowItWorks } from "./components/HowItsWork";
import { Footer } from "@/components/Footer";
import { ToolsSlide } from "./components/ToolsSlide";
import TitleServices from "./components/TitleServices";
import LayoutQualities from "./components/LayoutQualities";
import LayoutServicesWeb from "./components/LayoutServicesWeb";


export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center relative ">
      <Header />
      <ShadowBg variant="shadowCenter" className="z-[-1]" />
      <ShadowBg variant="shadowRight" className="z-[-1] top-0" />
      <ShadowBg variant="shadowLeft" className="z-[-1] top-96" />
      <GridContainer className="flex flex-col gap-5 justify-center items-center">
        <TitleServices />
        <CardServices />
        <SlideLogo />
        <LayoutQualities />
        <HowItWorks />
      </GridContainer>
      <ToolsSlide />
      <GridContainer className="mt-40 flex flex-col gap-5 justify-center items-center">
        <LayoutServicesWeb />
      </GridContainer>
      <Footer />
      <ShadowBg variant="shadowRight" className="z-[-1] bottom-96" />
      <ShadowBg variant="shadowLeft" className="z-[-1] bottom-0" />
    </div>
  );
}
