import { HandDrawnLine } from "@/components/HandDrawnLine";
import { GroupService } from "./Group-Services";

export default function LayoutServicesWeb() {
  return (
    <div className="flex flex-col justify-center items-center mb-40">
      <div className="relative inline-block mb-40">
        <h1 className="font-gurajada text-5xl text-amber-400 relative z-10 px-4">
          Nossos SaaS em serviços
        </h1>
        <HandDrawnLine width={400} height={100} strokeColor="#b84480" />
      </div>
      <GroupService />
    </div>
  );
}
