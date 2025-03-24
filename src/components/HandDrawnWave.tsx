import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

export function HandDrawnLine() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const rc = rough.svg(svgRef.current!);
    svgRef.current!.innerHTML = '';

    const amplitude = 5; // Altura das cristas (mais suave)
    const wavelength = 40; // Ondas mais largas
    const width = 250;
    const yBase = 50;

    const points: [number, number][] = [];

    for (let x = 0; x <= width; x += 3) {
      const y = yBase + amplitude * Math.sin((x / wavelength) * 2 * Math.PI);
      points.push([x, y]);
    }

    for (let i = 0; i < points.length - 1; i++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[i + 1];
      const line = rc.line(x1, y1, x2, y2, {
        stroke: '#B6437F',
        strokeWidth: 1.2,
        roughness: 1, // Suaviza o traço "feito à mão"
        bowing: 0.5,  // Menos curvado
      });
      svgRef.current!.appendChild(line);
    }
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