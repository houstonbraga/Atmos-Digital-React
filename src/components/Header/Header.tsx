import { useState, useEffect } from "react";
import { GridContainer } from "../GridContainer";
import { LinkItem } from "./LinkItem";
import { Link } from "react-router-dom";

const menuItens = [
  {
    path: "/",
    title: "Inicio",
  },

  {
    path: "/sobre",
    title: "Sobre nós",
  },

  {
    path: "/servicos",
    title: "Serviços",
  },

  {
    path: "/projetos",
    title: "Projetos",
  },

  {
    path: "/contatos",
    title: "Contatos",
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handlescrool = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handlescrool);
    return () => window.removeEventListener("scroll", handlescrool);
  }, []);

  return (
    <header
      className={`z-[1000] header sticky py-3 top-0 w-full transition-all duration-200 ${
        scrolled
          ? "color-header shadow-lg shadow-secondary-shadow"
          : "background"
      }`}
    >
      <GridContainer className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img src="/logo.svg" alt="logo-img" width={50} />
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <ul className="flex gap-16">
            {menuItens.map((item) => (
              <li key={item.path}>
                <LinkItem path={item.path} title={item.title} />
              </li>
            ))}
          </ul>
        </nav>
      </GridContainer>
    </header>
  );
}
