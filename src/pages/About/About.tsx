import { GridContainer } from "../../components/GridContainer";
import { Header } from "../../components/Header/Header";
import { ShadowBg } from "../../components/ShadowBg";

const About = () => {
  return (
    <>
      <Header />
      <ShadowBg variant='shadowG'/>
      <GridContainer>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-gurajada text-5xl text-amber-400 mt-15 mb-30">
            Quem somos?
          </h1>
          <div className="flex items-center justify-center gap-35 mb-30">
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
          <p className="max-w-[900px] text-center">No mundo digital de hoje, ter uma presença forte na internet não é mais uma opção, é uma necessidade. A <span className="text-amber-400">Atmos Digital</span> é uma agência digital especializada em criar soluções inovadoras para empresas que desejam se destacar no ambiente online.</p>
        </div>
      </GridContainer>
    </>
  );
};

export default About;
