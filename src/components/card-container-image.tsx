"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";

interface CardContainerProps {
  children: React.ReactNode;
}

export function CardContainerImage({ children }: CardContainerProps) {
  let className = "flex items-stretch m-2 p-4 pattern-topography-blue-300/20";
  return (
    <>
      <Card className={className}>{children}</Card>
    </>
  );
}
