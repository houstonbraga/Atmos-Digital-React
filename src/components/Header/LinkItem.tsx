import { Link } from "react-router-dom";

interface LinkItemProps {
    path: string;
    title: string;
}
export function LinkItem({ path, title } : LinkItemProps) {
    return (
       <Link className="hover:text-amber-500 transition-colors" to={path}>{title}</Link>
    )
}