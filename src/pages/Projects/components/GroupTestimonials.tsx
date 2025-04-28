import { testimonials } from "@/data/projectsData";

export default function GroupTestimonials() {
  return (
    <div className="flex gap-10 justify-center items-center">
      {testimonials.map((item) => (
        <div
          className="flex flex-col justify-center items-center gap-5 card-about rounded-md px-4 py-4 w-[450px] h-[340px] bg-zinc-900 bg-opacity-60 mb-10"
          key={item.id}
        >
          <img src={item.avatar} alt={item.name} />
          <p className="text-center">{item.description}</p>
          <div className="flex flex-col items-center">
            <h2 className="font-gurajada text-3xl">{item.name}</h2>
            <h3 className="font-gurajada text-2xl text-secondary">{item.profession?.toUpperCase()}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
