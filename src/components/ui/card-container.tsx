"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";

interface CardContainerProps {
  children: React.ReactNode;
  includeBg?: boolean;
}

export function CardContainer({ children, includeBg }: CardContainerProps) {
  return (
    <div
      className={`flex items-stretch p-4 h-full ${
        includeBg && "border bg-cardBg"
      }`}
    >
      {children}
    </div>
  );
}
