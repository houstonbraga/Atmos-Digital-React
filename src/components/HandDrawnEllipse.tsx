import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

interface HandDrawnEllipseProps {
  className?: string
  width?: number
  height?: number
}

export function HandDrawnEllipse({ className, width, height }: HandDrawnEllipseProps) {
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
      width={width}
      height={height}
      className={className}
    ></svg>
  );
}

