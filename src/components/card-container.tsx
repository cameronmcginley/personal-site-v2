"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";

interface CardContainerProps {
  children: React.ReactNode;
  bgpattern: string;
  patterncolor: string;
}

export function CardContainer({ children, ...props }: CardContainerProps) {
  let className = "flex items-stretch m-2 p-4";
  if (props.bgpattern) {
    className += ` pattern-${props.bgpattern}-${props.patterncolor}`;
  }
  console.log(className);
  return <Card className={className}>{children}</Card>;
}
