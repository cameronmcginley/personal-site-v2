import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardContainer } from "./card-container";

export function CardDots({ children }) {
  // Inline styles for dynamic/customizable parts of the pattern
  //   const patternStyle = {
  //     backgroundColor: "var(--border, transparent)",
  //     backgroundImage: `radial-gradient(var(--pattern-color, black) 10%, var(--pattern-bg-color, transparent) 10%)`,
  //     backgroundSize: "var(--pattern-size, 25px) var(--pattern-size, 25px)",
  //     opacity: "var(--pattern-opacity, 1)",
  //   };

  const patternStyle = {
    // backgroundColor: "hsl(var(--background))",
    backgroundImage: `radial-gradient(var(--dot-color) 10%, transparent 10%)`,
    backgroundSize: "var(--pattern-size, 15px) var(--pattern-size, 15px)",
    opacity: "var(--pattern-opacity, 1)",
  };

  return (
    // CardContainer without padding
    <Card className="flex items-stretch m-2 p-0">
      {/* Dots filling container */}
      <div className="flex flex-1 w-full h-full" style={patternStyle}>
        {children}
      </div>
    </Card>
  );
}
