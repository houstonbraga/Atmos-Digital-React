interface CardServicesProps {
  id: number;
  url: string;
  title: string;
  description: string;
}

const CardsList: CardServicesProps[] = [
  {
    id: 1,
    url: "./icon-website-services.svg",
    title: "Web Sites",
    description:
      "Web sites e landing pages dinâmicos com bastante animações utilizando as melhores bibliotécas de animações que existem no mercado da técnologia",
  },
  {
    id: 2,
    url: "./icon-design-services.svg",
    title: "Design Digital",
    description:
      "Artes criativas para impulsionar o seu negócio digital, trazendo mais profissionalismo e deixando o layout das suas redes socials bem chamativas e elegantes",
  },
  {
    id: 3,
    url: "./icon-marketing-services.svg",
    title: "Sistemas e Saas",
    description:
      "Desenvolvimento de SaaS e Web Systems com tecnologia de ponta, garantindo o melhor desempenho e segurança para o seu negócio digital",
  },
];

export default function CardServices() {
  return (
    <>
      {CardsList.map((item) => (
        <div
          key={item.id}
          className="card-service relative w-[336px] h-[404px] p-5 rounded-lg flex flex-col justify-center items-center gap-4 z-[1] bg-zinc-900 bg-opacity-60"
        >
          <div className="flex flex-col justify-center items-center">
            <img src={item.url} alt={item.title} />

            <h1 className="text-3xl text-secondary font-gurajada">
              {item.title}
            </h1>
          </div>

          <p className="text-sm text-center">{item.description}</p>

          <button className="px-6 py-2 text-white rounded-md cursor-pointer border border-amber-400 hover:border-secondary hover:text-secondary transition-colors opacity-80">
            Conhecer
          </button>
        </div>
      ))}
    </>
  );
}
