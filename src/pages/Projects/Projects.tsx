import { GridContainer } from "@/components/GridContainer";
import { Header } from "../../components/Header/Header";
import { HandDrawnWave } from "@/components/HandDrawnWave";
import CarouselWebSites from "./components/CarouselWebSites";
import CarouselDesignDigital from "./components/CarouselDesignDigital";

const Projects = () => {
  
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Header />
      <GridContainer className="flex flex-col gap-5 justify-center items-center">
        <div className="relative inline-block mt-20">
          <h1 className="font-gurajada text-5xl text-amber-400 relative z-10 px-4">
            Nossos projetos
          </h1>
          <HandDrawnWave />
        </div>
        <CarouselWebSites />
        <CarouselDesignDigital />
      </GridContainer>
    </div>
  );
};

export default Projects;
