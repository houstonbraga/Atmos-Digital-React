export function SlideLogo() {
  const logos = Array(12).fill('./mark-services-logo.svg');

  return(
    <div className="mt-40 mb-40 w-full flex gap-20 justify-center items-center">
      {
        logos.map((logo, index) => (
          <img key={index} src={logo} alt="logo-service-slider" />
        ))
      }  
    </div>
  );
};