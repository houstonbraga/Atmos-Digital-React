import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

interface LinkItemProps {
  path: string;
  title: string;
}

export function LinkItem({ path, title }: LinkItemProps) {
  const location = useLocation(); // Obtém a URL atual
  const currentPath = decodeURIComponent(location.pathname).toLowerCase(); 
  const normalizedPath = path.toLowerCase(); // Normaliza o caminho do menuItens

  const isActive = currentPath === normalizedPath; 

  const linkClasses = classNames(
    "transition-colors text-white hover:text-amber-500",
    {
      "!text-amber-500 selected-link font-bold": isActive, 
    }
  );

  return (
    <Link className={linkClasses} to={path}>
      {title}
    </Link>
  );
}