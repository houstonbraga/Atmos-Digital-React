interface CardServicesProps {
  id: number;
  src: string;
  title: string;
  description: string;
}

const listItems: CardServicesProps[] = [
  {
    id: 1,
    src: "./cleanCode.svg",
    title: "Códigos limpos",
    description:
      "Códigos refatorados e simplificados, para que nós termos a facilidade e agilidade de edição do seu site.",
  },
  {
    id: 2,
    src: "./interface.svg",
    title: "Intarfaces intuitivas",
    description:
      "Interfaces lindas e dinâmicas, trazendo uma experiência digital única nos usuários que entrarem no site.",
  },
  {
    id: 3,
    src: "./responsividade.svg",
    title: "Responsividade",
    description:
      "Site totalmente responsivo, para se adaptar em qualquer tipo de tela, trazendo a experiência de onde você estiver.",
  },
];

export function QualityService() {
  return (
    <>
      {listItems.map((item) => (
        <div key={item.id} className="flex flex-col gap-6">
          <div className="flex gap-4">
            <img src={item.src} alt={item.title} />
            <h2 className="text-secondary font-semibold">{item.title}</h2>
          </div>

          <p className="text-sm tracking-wider max-w-[247px]">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
}
