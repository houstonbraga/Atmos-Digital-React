import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

interface HandDrawnEllipseProps {
  className?: string
  ellipseX: number
  ellipseY: number
  ellipseWidth: number
  ellipseHeight: number
  ellipseColor?: string
}

export function HandDrawnEllipse({
  className,
  ellipseX,
  ellipseY,
  ellipseWidth,
  ellipseHeight,
  ellipseColor,
} : HandDrawnEllipseProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const rc = rough.svg(svgRef.current!);
    svgRef.current!.innerHTML = '';

    // ellipse(x, y, width, height)
    // (x, y) precisa ser o centro do svg
    const ellipse = rc.ellipse(ellipseX, ellipseY, ellipseWidth, ellipseHeight, {
      stroke: ellipseColor,
      strokeWidth: 1.5,
      roughness: 1.2,
      bowing: 1,
    });

    svgRef.current!.appendChild(ellipse);
  }, [ellipseX, ellipseY, ellipseWidth, ellipseHeight, ellipseColor]);

  return (
    <svg
      ref={svgRef}
      width={300}
      height={100}
      className={className}
    ></svg>
  );
}

