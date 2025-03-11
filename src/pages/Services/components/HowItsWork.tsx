interface HowItsWorkProps {
  id: number;
  src: string;
  title: string;
  text: string;
}

const listSteps: HowItsWorkProps[] = [
  {
    id: 1,
    src: "./chat-service.svg",
    title: "Consultas Gratuitas",
    text: "Entre em contato com nossa equipe, vocé irá ser atendido da melhor forma possivel",
  },
  {
    id: 2,
    src: "./know-service.svg",
    title: "Conheça o produto",
    text: "Conheça todos os benefícios dos nossos produtos e tenha acesso a toda informação sobre o mesmo",
  },
  {
    id: 3,
    src: "./structure-service.svg",
    title: "Estrutura e produção",
    text: "Fique por dentro de toda produção e desenvolvimento do seu produto digital",
  },
  {
    id: 4,
    src: "./objetive-service.svg",
    title: "Objetivo",
    text: "Finalmente tenha acesso total ao seu produto digital, elaborado com muito carinho por nossa equipe",
  },
];

export function HowItWorks() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-gurajada text-5xl text-amber-400 mb-20">Como Funciona?</h2>
      <h1 className="text-center font-bold text-4xl font-graphik max-w-[700px] mb-20">
        Obtenha resultados surpreendentes com apenas{" "}
        <span className="text-secondary">4 etapas simples</span>
      </h1>

      <div className="flex gap-4 items-center justify-between mb-40">
        {listSteps.map((step) => (
          <div key={step.id} className="flex flex-col gap-4 items-center justify-center max-w-[250px]">
            <img src={step.src} />
            <h2 className="font-semibold font-graphik text-xl text-secondary">
              {step.title}
            </h2>
            <p className="text-center text-sm tracking-wider">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
