import { MoveLeft, MoveRight } from "lucide-react";

export default function SeparatorProjects() {
    return (
        <span className="font-graphik text-xs flex justify-center items-center gap-1 text-gray-500">
            <MoveLeft />
            ARRASTE PARA OS LADOS 
            <MoveRight/>
        </span>
    )
}