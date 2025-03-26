import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

interface HandDrawnLineProps {
  width: number
  height: number
  strokeColor: string
}

export function HandDrawnLine({width, height, strokeColor}: HandDrawnLineProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const rc = rough.svg(svgRef.current!);
    svgRef.current!.innerHTML = '';

    // line(x1, y1, x2, y2)
    
    const line = rc.line(0, 50, 600, 50, {
      stroke: strokeColor,
      strokeWidth: 1.5,
      roughness: 3.2,
      bowing: 1,
    });

    svgRef.current!.appendChild(line);
  }, [strokeColor]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
    ></svg>
  );
}