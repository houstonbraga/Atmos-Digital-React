import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function CarouselWebSites() {
    return (
        <Carousel className="top-40 ml-5">/
          <CarouselContent>
            <CarouselItem className="basis-1/5">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="/project.png" alt="project" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="/project.png" alt="project" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    )
}