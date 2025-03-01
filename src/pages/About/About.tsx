import { Footer } from "@/components/Footer";
import { GridContainer } from "../../components/GridContainer";
import { Header } from "../../components/Header/Header";
import { ShadowBg } from "../../components/ShadowBg";
import { AccordionAbout } from "./components/AccordionAbout";
import { CardAbout } from "./components/CardAbout";

import "./index.css";
import { MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Header />
      <ShadowBg variant="shadowLeft" />
      <GridContainer className="flex flex-col gap-5 justify-center items-center">
        <div className="flex justify-center items-center flex-col mb-36">
          <h1 className="font-gurajada text-5xl text-amber-400 mt-16 mb-14">
            Quem somos?
          </h1>
          <div className="flex items-center justify-center mb-32 gap-10">
            <p className="font-Poppins text-xl max-w-[450px]">
              A <span className="text-amber-400">Atmos Digital</span> é uma
              agência digital especializada em desenvolvimento web, marketing
              digital e design digital. Criamos soluções inovadoras para
              empresas que desejam fortalecer sua presença online, combinando
              tecnologia, estratégia e criatividade. Nosso objetivo é
              transformar ideias em experiências digitais impactantes, ajudando
              marcas a crescer e se destacar no mercado.
            </p>

            <img src="./site-about-hero.svg" alt="site-hero-about" />
          </div>
          <p className="max-w-[900px] text-center">
            No mundo digital de hoje, ter uma presença forte na internet não é
            mais uma opção, é uma necessidade. A{" "}
            <span className="text-amber-400">Atmos Digital</span> é uma agência
            digital especializada em criar soluções inovadoras para empresas que
            desejam se destacar no ambiente online.
          </p>
        </div>

        <div className="w-full flex flex-col items-center mt-20 mb-20 gap-10">
          <h1 className="font-gurajada text-5xl mb-10">
            Transformando ideia em{" "}
            <span className="text-secondary">Experiências Digitais</span>
          </h1>
          <p className="text-center mb-10">
            No mundo digital de hoje, ter uma presença forte na internet não é
            mais uma opção, é uma necessidade. A{" "}
            <span className="text-amber-400">Atmos Digital</span> é uma agência
            digital especializada em criar soluções inovadoras para empresas que
            desejam se destacar no ambiente online.
          </p>
          <AccordionAbout />
        </div>

        <div className="flex flex-col items-center mb-20 mt-20">
          <h1 className="font-gurajada text-5xl mb-10">
            Por Que Escolher a{" "}
            <span className="text-amber-400">Atmos Digital</span>?
          </h1>
          <div className="card-about rounded-md px-4 py-4 bg-zinc-900 bg-opacity-60 mb-10">
            <CardAbout />
          </div>
          <p className="text-center max-w-[600px] mb-5">
            Vamos juntos criar experiências digitais que geram impacto! 🚀 Entre
            em contato conosco e transforme sua presença online.
          </p>
          <div className="flex flex-col gap-5 items-center ">
            <MoveDown size={28} strokeWidth={3} className="text-amber-400" />
            <Button className="hover:border-amber-400 border border-amber-400">Clique para falar conosco!</Button>
          </div>
        </div>
      </GridContainer>
      <Footer />
      <ShadowBg variant="shadowRight"/>
      <ShadowBg variant='shadowCenter'/>
      <ShadowBg variant='shadowLeft' className="!bottom-0 !top-auto"/>
    </div>
  );
};

export default About;
