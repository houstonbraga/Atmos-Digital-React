import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

export function HandDrawnLine() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const rc = rough.svg(svgRef.current!);
    svgRef.current!.innerHTML = '';

    // line(x1, y1, x2, y2)
    
    const line = rc.line(0, 50, 250, 60, {
      stroke: '#B6437F',
      strokeWidth: 1.5,
      roughness: 3.2,
      bowing: 1,
    });

    svgRef.current!.appendChild(line);
  }, []);

  return (
    <svg
      ref={svgRef}
      width="250"
      height="100"
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
    ></svg>
  );
}