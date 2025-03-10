export function Carrousel() {
  const palavras = [
    "DESENVOLVIMENTO WEB",
    "DESIGN WEB",
    "LANDING PAGES",
    "WEB SITES",
    "CRIATIVOS",
    "UX/UI DESIGN",
    "DESENVOLVIMENTO WEB",
    "DESIGN WEB",
    "LANDING PAGES",
    "WEB SITES",
    "CRIATIVOS",
    "UX/UI DESIGN",
  ];

  return (
    <div className="separator-logo separator1 mb-20">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="conjunto-palavras">
          {palavras.map((palavra, i) => (
            <div key={i} className="palavra">
              <span>{palavra}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
