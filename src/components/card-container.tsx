"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";

interface CardContainerProps {
  children: React.ReactNode;
}

export function CardContainer({ children }: CardContainerProps) {
  return (
    <Card className="flex items-stretch p-4 shadow-sm h-full">{children}</Card>
  );
}
