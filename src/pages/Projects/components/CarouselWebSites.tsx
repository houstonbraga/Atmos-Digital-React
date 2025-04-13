
import { HandDrawnEllipse } from "@/components/HandDrawnEllipse"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function CarouselWebSites() {
    return (
      <div className="flex flex-col justify-start mt-40">
        <div className="relative inline-block">
          <h3 className="font-gurajada text-3xl text-amber-400 relative z-10">Web Sites</h3>
          <HandDrawnEllipse className="absolute -top-8 -left-6" width={200} height={50}/>
        </div>
        
        <Carousel className="mt-2">
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
        
    )
}