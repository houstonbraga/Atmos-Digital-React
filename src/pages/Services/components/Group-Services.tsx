interface GroupServiceProps {
  id: number;
  name: string;
  src: string;
  description: string;
}

const servicesItems: GroupServiceProps[] = [
  {
    id: 1,
    name: "Gerenciamento de finanças",
    src: "./Capa-servicos.jpg",
    description:
      "Um sistema de cardápio Online, com autamação com o WhatsApp, trazendo praticidade e economia de tempo ao atender seus clientes, apresentando toda informação de serviços/produtos.",
  },
  {
    id: 2,
    name: "Agendamento Online",
    src: "./capa-servicos2.jpg",
    description:
      "Um sistema de agendamento para seu estabelecimento, economizando tempo ao responder muitos clientes, além de dexar seu agendamento de clientes 100% organizado com horários e dias dos atendimentos.",
  },
];

export function GroupService() {
  return (
    <div className="flex space-x-10">
      {servicesItems.map((service) => (
        <div key={service.id} className="flex flex-col max-w-[450px] gap-7">
          <div className="flex flex-col justify-start gap-1">
            <h3 className="text-sm text-amber-400">{service.name}</h3>
            <img
              className="w-[450px] rounded-md drop-shadow-md box-shadow cursor-pointer hover:grayscale transition-all duration-1000"
              src={service.src}
              alt={service.name}
            />
          </div>
          <p className="font-poppins text-md7/6">
             {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
