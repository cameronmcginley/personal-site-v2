"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";

interface CardContainerProps {
  children: React.ReactNode;
  bgpattern: string;
  patterncolor: string;
}

export function CardContainer({ children, ...props }: CardContainerProps) {
  let className = "flex items-stretch m-2 p-4 shadow-sm";

  // This is not supported
  // https://stackoverflow.com/questions/69687530/dynamically-build-classnames-in-tailwindcss
  // if (props.bgpattern) {
  //   className += ` pattern-${props.bgpattern}-${props.patterncolor}`;
  // }

  // But can define like this
  if (props.bgpattern === "jigsaw") {
    className += ` pattern-jigsaw-blue-300/20`;
  } else if (props.bgpattern === "topography") {
    // className += ` pattern-topography-blue-300/15`;
    className += ` pattern-topography-gray-300/15`;
  } else if (props.bgpattern === "texture") {
    className += ` pattern-texture-blue-300/20`;
  } else if (props.bgpattern === "crosses") {
    className += ` pattern-crosses-blue-300/20`;
  } else if (props.bgpattern === "grid") {
    className += ` pattern-grid-blue-300/20`;
  } else if (props.bgpattern === "graph") {
    className += ` pattern-graph-blue-300/20`;
  } else if (props.bgpattern === "squares") {
    className += ` pattern-squares-blue-300/20`;
  } else if (props.bgpattern === "x-equals") {
    className += ` pattern-x-equals-blue-300/20`;
  } else if (props.bgpattern === "plus") {
    className += ` pattern-plus-blue-300/20`;
  } else if (props.bgpattern === "wood") {
    className += ` pattern-wood-gray-300/15`;
  } else if (props.bgpattern === "signal") {
    className += ` pattern-signal-gray-300/15`;
  }

  console.log(className);
  return <Card className={className}>{children}</Card>;
}
