import { Footer } from "@/components/Footer";
import { GridContainer } from "../../components/GridContainer";
import { Header } from "../../components/Header/Header";
import { ShadowBg } from "../../components/ShadowBg";
import "./index.css";
import TitleAbout from "./components/TitleAbout";
import AboutUs from "./components/AboutUs";
import AboutTopics from "./components/AboutTopics";
import WhyChooseAtmos from "./components/WhyChooseAtmos";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Header />
      <ShadowBg variant="shadowLeft" className="top-40"/>
      <GridContainer className="flex flex-col gap-5 justify-center items-center">
        <div className="flex justify-center items-center flex-col mb-36">
          <TitleAbout />
          <AboutUs />
        </div>
        <AboutTopics />
        <WhyChooseAtmos />
      </GridContainer>
      <Footer />
      <ShadowBg variant="shadowRight" className="top-0"/>
      <ShadowBg variant="shadowCenter" />
      <ShadowBg variant="shadowLeft" className="!bottom-0 !top-auto" />
    </div>
  );
};

export default About;
