import classNames from "classnames";
import { Link } from "react-router-dom";

interface LinkItemProps {
    path: string;
    title: string;
    selected?: boolean;
}
export function LinkItem({ path, title } : LinkItemProps) {
    const linkClasses = classNames(
        "text-white hover:text-amber-500 transition-colors",
        {
            "text-amber-500": path === window.location.pathname
        }
    )




    return (
       <Link className={linkClasses} to={path}>{title}</Link>
    )
}