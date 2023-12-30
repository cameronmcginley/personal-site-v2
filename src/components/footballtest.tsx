"use client";

import React from "react";
import { useSpring, animated } from "react-spring";

const FootballPathAnimation = ({ start, end, maxHeight }) => {
  // Calculate control points for the quadratic Bezier curve
  const controlPointX = (start.x + end.x) / 2;
  const controlPointY = Math.min(start.y, end.y) - maxHeight;

  // Path for the football's flight (Quadratic Bezier Curve)
  const pathD = `M ${start.x} ${start.y} Q ${controlPointX} ${controlPointY}, ${end.x} ${end.y}`;

  // React Spring animation hook for the drawing effect
  const animation = useSpring({
    from: { strokeDashoffset: 1000 },
    to: { strokeDashoffset: 0 },
    config: { duration: 2000 }, // Animation duration
    reset: true,
  });

  return (
    <svg
      width="100%"
      height="100vh"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <animated.path
        d={pathD}
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeDasharray="1000"
        style={animation}
      />
    </svg>
  );
};

export default FootballPathAnimation;
