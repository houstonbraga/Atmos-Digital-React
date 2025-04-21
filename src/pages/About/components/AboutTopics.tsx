import { AccordionAbout } from "./AccordionAbout";

export default function AboutTopics() {
  return (
    <div className="w-full flex flex-col items-center mt-20 mb-20 gap-10">
      <h1 className="font-gurajada text-5xl mb-10">
        Transformando ideias em{" "}
        <span className="text-secondary">Experiências Digitais</span>
      </h1>
      <p className=" font-poppins text-md text-center mb-10">
        No mercado digital de hoje, ter uma presença online forte não é apenas uma vantagem, mas uma necessidade. A <span className="text-amber-400">Atmos Digital</span> é especialista no desenvolvimento de soluções SaaS, criação de sistemas web sob medida e templates de sites otimizados, ajudando empresas a crescer e se destacar no ambiente online.
      </p>
      <AccordionAbout />
    </div>
  )
}