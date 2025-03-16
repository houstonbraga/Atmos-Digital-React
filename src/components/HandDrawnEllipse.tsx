import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

export function HandDrawnEllipse() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const rc = rough.svg(svgRef.current!);
    svgRef.current!.innerHTML = '';

    // ellipse(x, y, width, height)
    // (x, y) precisa ser o centro do svg
    const ellipse = rc.ellipse(150, 50, 280, 70, {
      stroke: '#B6437F',
      strokeWidth: 1.5,
      roughness: 1.2,
      bowing: 1,
    });

    svgRef.current!.appendChild(ellipse);
  }, []);

  return (
    <svg
      ref={svgRef}
      width="300"
      height="100"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
    ></svg>
  );
}

