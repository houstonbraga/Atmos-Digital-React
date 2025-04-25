import { GridContainer } from "@/components/GridContainer";
import { Header } from "../../components/Header/Header";
import CarouselWebSites from "./components/CarouselWebSites";
import CarouselDesignDigital from "./components/CarouselDesignDigital";
import { NameSlide } from "./components/NameSlide";
import './index.css'
import SeparatorProjects from "./components/SeparatorProjects";
import TitleProjects from "./components/TitleProjects";

const Projects = () => {
  
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Header />
      <GridContainer className="flex flex-col gap-5 justify-center items-center">
        <TitleProjects />
        <CarouselWebSites />
        <SeparatorProjects />
        <CarouselDesignDigital />
      </GridContainer>
      <NameSlide />
    </div>
  );
};

export default Projects;
