import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import { CardAbout } from "./CardAbout";

export default function WhyChooseAtmos() {
  return (
    <div className="flex flex-col items-center mb-20 mt-20">
      <h1 className="font-gurajada text-5xl mb-10">
        Por Que Escolher a <span className="text-amber-400">Atmos Digital</span>
        ?
      </h1>
      <div className="card-about rounded-md px-4 py-4 bg-zinc-900 bg-opacity-60 mb-10">
        <CardAbout />
      </div>
      <p className="text-center max-w-[600px] mb-5">
        Vamos juntos criar experiências digitais que geram impacto! 🚀 Entre em
        contato conosco e transforme sua presença online.
      </p>
      <div className="flex flex-col gap-5 items-center ">
        <MoveDown size={28} strokeWidth={3} className="text-amber-400" />
        <Button className="hover:border-amber-400 border border-amber-400">
          Clique para falar conosco!
        </Button>
      </div>
    </div>
  );
}
