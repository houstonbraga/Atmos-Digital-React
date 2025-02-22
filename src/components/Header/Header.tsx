import { GridContainer } from "../GridContainer";
import { LinkItem } from "./LinkItem";

const menuItens = [
  {
    path: '/',
    title: 'Inicio',
  },

  {
    path: '/sobre',
    title: 'Sobre Nós',
  },

  {
    path: '/serviços',
    title: 'Serviços',
  },

  {
    path: '/projetos',
    title: 'Projetos',
  },

  {
    path: '/contatos',
    title: 'Contatos',
  },

]

export function Header() {
  return (
    <header className="header sticky py-3 top-0 shadow-md w-full">
      <GridContainer className="flex justify-between items-center">
        <div>
          <img src="/logo.svg" alt="logo-img" width={120} />
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
