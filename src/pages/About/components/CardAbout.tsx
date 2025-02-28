import { Check } from "lucide-react";

const cardItems = [
  {
    id: 1,
    description:
      "Soluções personalizadas para atender às necessidades específicas do seu negócio.",
  },
  {
    id: 2,
    description:
      "Equipe experiente e apaixonada por tecnologia, marketing e design.",
  },
  {
    id: 3,
    description:
      "Foco em inovação e tendências, garantindo que sua empresa esteja sempre um passo à frente.",
  },
];
export function CardAbout() {
  return (
    <div className="flex flex-col gap-5 justify-center">
      {cardItems.map((item) => (
        <div className="flex items-center gap-2">
          <Check className="text-amber-400"/>
          <p key={item.id}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
