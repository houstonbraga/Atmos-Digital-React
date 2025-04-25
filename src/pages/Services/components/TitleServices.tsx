import { HandDrawnLine } from "@/components/HandDrawnLine";
import { MoveDown } from "lucide-react";

export default function TitleServices() {
  return (
    <>
      <div className="relative inline-block mt-20">
        <h1 className="font-gurajada text-5xl text-amber-400 relative z-10 px-4">
          Nossos serviços
        </h1>
        <HandDrawnLine width={250} height={100} strokeColor="#b84480" />
      </div>
      <MoveDown
        size={28}
        strokeWidth={3}
        className="text-amber-400 mt-10 mb-10"
      />
    </>
  );
}
