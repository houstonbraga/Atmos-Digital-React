import css from "@/assets/icons-skills/css.svg";
import figma from "@/assets/icons-skills/figma.png";
import graficoql from "@/assets/icons-skills/graficoql.png";
import html from "@/assets/icons-skills/html.png";
import javascript from "@/assets/icons-skills/javascript.svg";
import materialui from "@/assets/icons-skills/materialui.png";
import photoshop from "@/assets/icons-skills/photoshop.png";
import react from "@/assets/icons-skills/react.png";
import typescript from "@/assets/icons-skills/typescript.png";
import tailwind from "@/assets/icons-skills/tailwind.svg";
import nextjs from "@/assets/icons-skills/nextjs.svg";
import postgresql from "@/assets/icons-skills/icons8-postgreesql.svg";

export function ToolsSlide() {
  const tools = [
    { src: figma, name: "Figma" },
    { src: css, name: "CSS" },
    { src: graficoql, name: "GraphQL" },
    { src: html, name: "HTML" },
    { src: javascript, name: "JavaScript" },
    { src: materialui, name: "Material UI" },
    { src: photoshop, name: "Photoshop" },
    { src: react, name: "React" },
    { src: typescript, name: "TypeScript" },
    { src: tailwind, name: "Tailwind" },
    { src: nextjs, name: "Next.js" },
    { src: postgresql, name: 'Postgresql' }
  ];

  return (
    <div className="tools-section flex justify-center items-center gap-12 w-full py-8 overflow-hidden max-w-[1920px]">
      <div className="relative overflow-hidden w-full flex group fade-mask">
        <div className="flex gap-12 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap ">
          {[...tools, ...tools, ...tools, ...tools, ...tools].map((tool, i) => (
            <div key={i} className="flex-shrink-0 p-2">
              <img
                src={tool.src}
                alt={tool.name}
                className="w-20 h-20 min-w-[50px] min-h-[50px] opacity-60"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
