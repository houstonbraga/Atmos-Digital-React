import { MoveLeft, MoveRight } from "lucide-react";

export default function SeparatorProjects() {
    return (
        <span className="font-graphik text-xs flex justify-center items-center gap-1 text-gray-500 mt-10">
            <MoveLeft className="animate-slide-left"/>
            ARRASTE PARA OS LADOS 
            <MoveRight className="animate-slide-right"/>
        </span>
    )
}