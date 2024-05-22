"use client";

import * as React from "react";

interface CardProps {
  children: React.ReactNode;
  fullHeight?: boolean;
}

export function Card({ children, ...props }: CardProps) {
  let className = `
  border flex flex-row max-w-946 w-full 
  bg-gradient-to-br 
  from-cardBg 
  from-40% 
  via-cardSheen 
  via-65% 
  to-cardBg 
  to-90%`;

  if (props.fullHeight) {
    className += " h-full";
  }

  return <div className={className}>{children}</div>;
}
