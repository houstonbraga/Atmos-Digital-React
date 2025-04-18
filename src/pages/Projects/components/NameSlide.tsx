
export function NameSlide() {
  const names = [
    {name: 'ATMOS'},
    {name: 'DIGITAL'},
    {name: 'ATMOS'},
    {name: 'ATMOS'},
    {name: 'DIGITAL'},
    {name: 'ATMOS'},
    {name: 'ATMOS'},
    {name: 'DIGITAL'},
  ];

  return (
    <div className="name-bar tools-section flex justify-center items-center gap-12 w-full py-8 overflow-hidden max-w-[1920px] mt-20">
      <div className="relative overflow-hidden w-full flex group fade-mask">
        <div className="flex gap-2 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap ">
          {[...names, ...names, ...names, ...names, ...names].map((n, i) => (
            <div key={i} className=" flex-shrink-0">
              <h1 className="name-slide font-porao-serif text-secondary text-opacity-5">{n.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}