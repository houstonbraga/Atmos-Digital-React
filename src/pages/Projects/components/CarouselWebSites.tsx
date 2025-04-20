import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import { HandDrawnEllipse } from "@/components/HandDrawnEllipse"

interface Projects {
  id: number
  url: string
}

const projects: Projects[] = [
  {id: 1, url: "/project.jpg"},
  {id: 2, url: "big-image-service.jpg"}
]

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
          align: "center",
          loop: true,
        }}>
          <CarouselContent>
            {
              [...projects, ...projects, ...projects].map((project) => (
                <CarouselItem
                 key={project.id} 
                 className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 max-w-[350px] max-h-[180px]"
                >
                  <img
                   src={project.url}
                   alt="project"
                  />
                </CarouselItem>
              ))
            }
            
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
        
    )
}