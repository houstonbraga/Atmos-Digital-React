import { useEffect, useState } from "react";
import { testimonials } from "@/data/projectsData";
import ButtonsTestimonials from "./ButtonsTestimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";


export default function GroupTestimonials() {
  const [emblaApi, setEmblaApi] = useState<any>(null); //CONCERTAR ESSE ERRO🥶
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // definir slide inicial

    return () => {
      emblaApi?.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="flex flex-col justify-center items-center gap-5 mb-20">
      <div className="flex gap-10 justify-center items-center w-full">
        <Carousel setApi={setEmblaApi} className="w-full max-w-6xl">
          <CarouselContent>
            <CarouselItem className="flex gap-10 justify-center">
              {testimonials
                .filter((item) => item.id <= 2)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col w-[450px] h-[320px] bg-zinc-900 bg-opacity-60 px-5 py-3 rounded-md justify-center items-center"
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-[60px] h-[60px]"
                    />
                    <p className="text-center text-gray-300">{item.description}</p>
                    <h2 className="text-3xl font-gurajada text-white">{item.name}</h2>
                    <h3 className="font-gurajada text-2xl text-secondary">
                      {item.profession?.toUpperCase()}
                    </h3>
                  </div>
                ))}
            </CarouselItem>
            <CarouselItem className="flex gap-10 justify-center">
              {testimonials
                .filter((item) => item.id > 2 && item.id <= 4)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col w-[450px] h-[320px] bg-zinc-900 bg-opacity-60 px-5 py-3 rounded-md justify-center items-center"
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-[60px] h-[60px]"
                    />
                    <p className="text-center text-gray-300">{item.description}</p>
                    <h2 className="text-3xl font-gurajada text-white">{item.name}</h2>
                    <h3 className="font-gurajada text-2xl text-secondary">
                      {item.profession?.toUpperCase()}
                    </h3>
                  </div>
                ))}
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <ButtonsTestimonials currentSlide={currentSlide} />
    </div>
  );
}

