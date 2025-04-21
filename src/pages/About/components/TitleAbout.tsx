import { HandDrawnEllipse } from "@/components/HandDrawnEllipse";

export default function TitleAbout() {
  return (
    <div className="relative inline-block mt-20 mb-20">
            <h1 className="font-gurajada text-5xl text-amber-400 relative z-10 px-4">
              Quem somos?
            </h1>
            <HandDrawnEllipse 
              ellipseX={150}
              ellipseY={50}
              ellipseWidth={280}
              ellipseHeight={70}
              ellipseColor='#b84480'
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            />
          </div>
  )
}