import { GroupService } from "./Group-Services";

export function ServicesSection() {
  return (
    <div className="flex flex-col justify-center items-center mb-40">
      <h1 className="font-gurajada text-5xl text-amber-400 mb-40">Nossos sistemas web</h1>
      <GroupService />
    </div>
  )
}