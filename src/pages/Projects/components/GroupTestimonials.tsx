import { testimonials } from "@/data/projectsData";
import ButtonsTestimonials from "./ButtonsTestimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function GroupTestimonials() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex gap-10 justify-center items-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              {testimonials
                .filter((item) => item.id <= 2)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 w-[450px] h-[340px] bg-zinc-900 bg-opacity-60 p-5"
                  >
                    <img src={item.avatar} alt={item.name} className="w-[60px] h-[60px-px]"/>
                  </div>
                ))}
            </CarouselItem>
            <CarouselItem>
              {testimonials
                .filter((item) => item.id <= 4 && item.id > 2)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-3 w-[450px] h-[340px] bg-zinc-900 bg-opacity-60 p-5"
                  >
                    ola mundo
                  </div>
                ))}
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <ButtonsTestimonials />
    </div>
  );
}
