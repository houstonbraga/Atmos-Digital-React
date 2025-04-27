import { HandDrawnWave } from "@/components/HandDrawnWave";

interface TitleProjectsProps {
  title: string
}

export default function TitleProjects({title}: TitleProjectsProps) {
  return (
    <div className="relative inline-block mt-20">
      <h1 className="font-gurajada text-5xl text-amber-400 relative z-10 px-4">
        {title}
      </h1>
      <HandDrawnWave />
    </div>
  );
}
