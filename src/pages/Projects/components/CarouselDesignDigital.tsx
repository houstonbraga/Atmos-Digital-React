import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { HandDrawnEllipse } from "@/components/HandDrawnEllipse";

export default function CarouselDesignDigital() {
    return (
        <div className="flex flex-col justify-start">
        <div className="relative inline-block mb-3">
          <h3 className="font-gurajada text-3xl text-amber-400 relative z-10">Design</h3>
          <HandDrawnEllipse 
            ellipseX={80}
            ellipseY={50}
            ellipseWidth={100}
            ellipseHeight={40}
            ellipseColor='#faa819'
            className="absolute -top-8 -left-12 z-0"
          />
        </div>
        
        <Carousel className="mt-2" 
        opts={{
          align: "start",
          loop: true,
        }}>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src="/project.png" alt="project" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
}