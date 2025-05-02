interface ButtonsTestimonialsProps {
  currentSlide: number;
}

export default function ButtonsTestimonials({ currentSlide }: ButtonsTestimonialsProps) {
  const active = "bg-secondary btn-feedback transition-colors";
  const inactive = "bg-white btn-feedback transition-colors";

  return (
    <div className="flex gap-2 mb-10">
      <button className={currentSlide === 0 ? active : inactive}></button>
      <button className={currentSlide === 1 ? active : inactive}></button>
    </div>
  );
}
