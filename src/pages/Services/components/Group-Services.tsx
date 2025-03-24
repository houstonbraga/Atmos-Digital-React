import { ExternalLink } from "lucide-react";

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
      "Um sistema de agendamento para seu estabelecimento, economizando tempo ao responder muitos clientes, além de deixar seu agendamento de clientes 100% organizado com horários e dias dos atendimentos.",
  },
];

export function GroupService() {
  return (
    <div className="flex space-x-10">
      {servicesItems.map((service) => (
        <div key={service.id} className="flex flex-col max-w-[450px] gap-7">
          <div className="flex flex-col justify-start gap-1">
            <h3 className="text-sm text-amber-400">{service.name}</h3>
            <div className="relative group">
              <img
                className="w-[450px] rounded-md drop-shadow-lg box-shadow group-hover:grayscale"
                src={service.src}
                alt={service.name}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50 rounded-md cursor-pointer ">
                <div className="flex justify-center items-center">
                  <a href="#">
                  <ExternalLink className="text-amber-400 hover:text-white" width={44} height={44}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="font-poppins text-md7/6">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
