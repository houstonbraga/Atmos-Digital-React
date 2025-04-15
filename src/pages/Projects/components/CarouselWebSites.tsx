import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import { HandDrawnEllipse } from "@/components/HandDrawnEllipse"

export default function CarouselWebSites() {
    return (
      <div className="flex flex-col justify-start mt-20">
        <div className="relative inline-block mb-3">
          <h3 className="font-gurajada text-3xl text-amber-400 relative z-10">Web Sites</h3>
          <HandDrawnEllipse 
            ellipseX={80}
            ellipseY={50}
            ellipseWidth={150}
            ellipseHeight={40}
            ellipseColor='#faa819'
            className="absolute -top-8 -left-8 z-0"
          />
        </div>
        
        <Carousel className="mt-2" 
        opts={{
          align: "start",
        }}>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <img src="/project.png" alt="project" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
        
    )
}